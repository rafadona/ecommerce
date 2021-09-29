import { getSession, useSession } from "next-auth/client";
import Header from "../components/Header";
import db from "./api/firebase";
import { collection, getDocs, getDoc, doc } from "firebase/firestore";
import { query, orderBy, limit } from "firebase/firestore";
import moment from "moment";
import Pedido from "../components/Pedido";
import Footer from "../components/Footer";

function Pedidos({ pedidos }) {
    const [session] = useSession();



    const printPedidos = () => {

        console.log(pedidos);
    };

    return (
        <div>
            <Header />
            <main className="max-w-screen-xl mx-auto p-10 ">
                <h1 className="text-3xl border-b mb-2 pb-1 border-yellow-400">
                    Meus Pedidos
                </h1>

                {session ? (
                    <div className="mt-5 space-y-4 ">
                        <h2>{pedidos.length} pedidos</h2>
                        <div>
                            {pedidos?.map(({ id, email, total, time, itens }) => (
                                <Pedido key={id} id={id} email={email} total={total} time={time} itens={itens} />
                            ))}


                        </div>
                    </div>

                ) : (
                    <h2>Por favor faça o login para ver seus pedidos</h2>
                )}
            </main>

            {pedidos.length > 0 && session && (
                <Footer />
            )}

        </div>
    );
}

export default Pedidos;


export async function getServerSideProps(context) {

    const session = getSession(context);

    if (!session) {
        return {
            props: {},
        };
    }


    // const resposta = await getDocs(collection(db, "pedidos"));
    const q = query(collection(db, "pedidos"), orderBy("time", "desc"));
    // let pedidos = [];



    // const respostas = await getDocs(q);
    // respostas.forEach((doc) => {

    //     console.log(doc.id, " => ", doc.data().total);



    //     pedidos.push({
    //         key: doc.id,
    //         id: doc.id,
    //         email: doc.data().email,
    //         time: moment(doc.data().time.toDate()).unix(),
    //         itens: doc.data().itens
    //     });
    // });


    const respostas = await getDocs(q);

    const pedidos = await Promise.all(
        respostas.docs.map(async (pedido) => ({
            id: pedido.id,
            email: pedido.data().email,
            total: +pedido.data().total.toFixed(2),
            time: moment(pedido.data().time.toDate()).unix(),
            itens: pedido.data().itens,

        }))
    );


    return {
        props: {
            pedidos,

        }
    };

}