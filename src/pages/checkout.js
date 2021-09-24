import Header from "../components/Header";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { clearBasket, selectItems, selectTotal } from "../slices/basketSlice";
import ProdutoCheckout from "../components/ProdutoCheckout";
import { useSession } from "next-auth/client";
import TestFirestore from "../components/testFirestore";
import { useRouter } from "next/router";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import db from "./api/firebase";


function Checkout() {
    const items = useSelector(selectItems);
    const total = useSelector(selectTotal);
    const router = useRouter();
    const dispatch = useDispatch();
    const [session] = useSession();

    const limparCarrinho = () => {
        const nada = [];
        dispatch(clearBasket(nada));
    };


    // const createCheckoutSession = async () => {
    //     try {
    //         const checkoutSession = await axios.post("/api/create-checkout-session", {

    //             items: items,
    //             email: session.user.email,
    //             total: total
    //         });

    //         router.push("/sucesso");
    //         limparCarrinho();
    //     } catch (error) {
    //         console.error("Error adding document: ", error);
    //     }


    // };
    const pedido = {
        items: items,
        email: session.user.email,
        total: total,
        time: serverTimestamp()

        // timestamp: admin.firestore.FieldValue.serverTimestamp()
    };

    const finalizarPedido = async () => {
        try {
            const docRef = await addDoc(collection(db, "pedidos"), pedido);
            console.log("Documento registrado no Banco de dados: ", docRef.id);
            router.push("/sucesso");
            limparCarrinho();
        } catch (error) {
            console.error("Erro adicionando no BD: ", error);
        }
    };




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

                            <button onClick={finalizarPedido} disabled={!session} className={`button mt-2 ${!session && "from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed"}`}>
                                {!session ? "Faça o Login para Fechar o Pedido" : "Finalizar Pedido"}
                            </button>
                            <TestFirestore />
                        </div>
                    )}

                </div>
            </main>


        </div>
    );
};

export default Checkout;
