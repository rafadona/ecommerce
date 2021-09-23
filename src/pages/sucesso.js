import { CheckCircleIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import Header from "../components/Header";

function Sucesso() {

    const router = useRouter();
    return (
        <div className="bg-gray-100 h-screen">
            <Header />
            <main className="max-w-screen-lg mx-auto">
                <div className="flex flex-col p-10 bg-white">
                    <div className="flex items-center space-x-2 mb-5">
                        <CheckCircleIcon className="text-green-500 h-10" />
                        <h1 className="text-3xl">
                            Obrigado pela compra, seu pedido foi confirmado!
                        </h1>
                    </div>
                    <p>
                        Obrigado por comprar em nosso site. Um email de confirmação foi enviado, se quiser checar o andamento de seu pedido clique no link abaixo.
                    </p>
                    <button onClick={() => router.push("/pedidos")} className="button mt-8" >Meus Pedidos</button>
                </div>

            </main>
        </div>
    );
}

export default Sucesso;
