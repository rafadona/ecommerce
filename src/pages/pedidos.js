import { getSession, useSession } from "next-auth/client";
import Header from "../components/Header";
import db from "./api/firebase";
import { collection, getDocs, getDoc, doc } from "firebase/firestore";
import { query, orderBy, limit } from "firebase/firestore";
import moment from "moment";

function Pedidos({ pedidos }) {
    const [session] = useSession();



    const printPedidos = () => {

        console.log(pedidos);
    };



    // console.log(pedidos);
    return (
        <div>
            <Header />
            <main className="max-w-screen-lg mx-auto p-10">
                <h1 className="text-3xl border-b mb-2 pb-1 border-yellow-400">
                    Seus Pedidos
                </h1>

                {session ? (
                    <div>
                        <h2>{pedidos.id} </h2>
                        <p>{pedidos.email}</p>
                        <p>{pedidos.time}</p>
                        <button onClick={printPedidos} className="button">print pedidos</button>

                    </div>

                ) : (
                    <h2>Por favor faça o login para ver seus pedidos</h2>
                )}

                <div className="mt-5 space-y-4 ">

                </div>
            </main>

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