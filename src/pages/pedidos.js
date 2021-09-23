import { useSession } from "next-auth/client";
import Header from "../components/Header";

function Pedidos({ pedidos }) {
    const [session] = useSession();
    return (
        <div>
            <Header />
            <main className="max-w-screen-lg mx-auto p-10">
                <h1 className="text-3xl border-b mb-2 pb-1 border-yellow-400">
                    Seus Pedidos
                </h1>

                {session ? (
                    <h2>x pedidos</h2>
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


}