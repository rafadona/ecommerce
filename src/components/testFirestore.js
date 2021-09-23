import { collection, addDoc } from "firebase/firestore";
import db from "../pages/api/firebase";

function TestFirestore() {

    const addDataFirestore = async (e) => {

        try {
            const docRef = await addDoc(collection(db, "users"), {
                first: "Rafael",
                mid: "Simoes",
                last: "Dona",
                born: 1990,
            });
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    };


    return (
        <div>
            <button onClick={addDataFirestore} className="button">teste firestore</button>
        </div>
    );
}

export default TestFirestore;
