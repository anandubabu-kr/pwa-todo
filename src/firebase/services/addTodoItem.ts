import { collection, addDoc } from "firebase/firestore";
import { db } from "../config";
import { todoItemType } from "../../types";

const addToDoToFireStore = async (userName: string, task: todoItemType) => {

    // Add a new document in collection "cities"



    try {
        const docRef = await addDoc(collection(db, "pwa-todo", userName, 'tasks'), task);
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}


export default addToDoToFireStore