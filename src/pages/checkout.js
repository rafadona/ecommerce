import Header from "../components/Header";
import Image from "next/image";
import { useSelector } from "react-redux";
import { selectItems, selectTotal } from "../slices/basketSlice";
import ProdutoCheckout from "../components/ProdutoCheckout";
import { useSession } from "next-auth/client";
import Footer from "../components/Footer";
import TestFirestore from "../components/testFirestore";


function Checkout() {
    const items = useSelector(selectItems);
    const total = useSelector(selectTotal);
    const [session] = useSession();
    return (
        <div className="bg-gray-100">
            <Header />

            <main className="lg:flex max-w-screen-2xl">

                {/* esquerda */}
                <div className="flex-grow m-5 shadow-sm" >
                    <Image src="https://i.ibb.co/D1Wm5xy/851-PCGaming-Grid-Narrow-1500x300.jpg" width={1500} height={300} />

                    <div className="flex flex-col p-5 space-y-10 bg-white">
                        <h1 className="text-3xl border-b pb-4">
                            {items.length === 0 ? "Seu carrinho está vazio." : "Seu Carrinho de Compras"}
                        </h1>
                        {items.map((item, i) => (
                            <ProdutoCheckout
                                key={i}
                                id={item.id}
                                title={item.title}
                                rating={item.rating}
                                price={item.price}
                                description={item.description}
                                category={item.category}
                                image={item.image}

                            />

                        ))}
                    </div>
                </div>


                {/* direita */}

                <div className="flex flex-col bg-white p-8 shadow-md">
                    {items.length > 0 && (
                        <div>
                            <h2 className="whitespace-nowrap">Subtotal ({items.length} itens):
                                <span className="font-bold">
                                    <p>R$ {total.toFixed(2)}</p>
                                </span>
                            </h2>

                            <button disabled={!session} className={`button mt-2 ${!session && "from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed"}`}>
                                {!session ? "Faça o Login para Fechar o Pedido" : "Finalizar Pedido"}
                            </button>
                            <TestFirestore />
                        </div>
                    )}

                </div>
            </main>


        </div>
    );
}

export default Checkout;
