import { collection, addDoc } from "firebase/firestore";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import db from "../pages/api/firebase";
import { clearBasket, selectItems } from "../slices/basketSlice";


function TestFirestore() {

    const items = useSelector(selectItems);
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
            limparCarrinho();
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    };


    return (
        <div>
            <div className="my-2">
                <button onClick={addDataFirestore} className="button">teste firestore</button>

            </div>
            <div>
                <button onClick={limparCarrinho} className="button">limpar carrinho</button>
            </div>
        </div>

    );
}

export default TestFirestore;
