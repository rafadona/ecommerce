import { collection, addDoc } from "firebase/firestore";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import db from "../pages/api/firebase";
import { clearBasket } from "../slices/basketSlice";


function TestFirestore() {

    const dispatch = useDispatch();
    const router = useRouter();

    const limparCarrinho = () => {
        const nada = [];
        dispatch(clearBasket(nada));
    };

    const addDataFirestore = async () => {

        try {
            const docRef = await addDoc(collection(db, "pedidos"), {
                first: "Rafael",
                mid: "Simoes",
                last: "Dona",
                born: 1990,
            });
            console.log("Document written with ID: ", docRef.id);

            router.push("/sucesso");
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    };


    return (
        <div>
            <button onClick={addDataFirestore} className="button">teste firestore</button>
            <button onClick={limparCarrinho} className="button">teste limpar carrinho</button>
        </div>
    );
}

export default TestFirestore;
