import { db } from "./Firebase";
/*import { doc, addDoc, collection, serverTimestamp, query, orderBy} from 'firebase/firestore';
import { collectionData } from 'rxfire/firestore';
import { startWith } from 'rxjs/operators';
import { onMount } from 'svelte';*/
import { doc, setDoc } from "firebase/firestore";
// Add a new document in collection "cities"
export async function test() {
    await setDoc(doc(db, "user", "1"), {
        id: Number(localStorage.getItem('uid')),
        name: localStorage.getItem('username'),
        email: localStorage.getItem('email'),
        coins: 10000,
        bets: [],
        historyBets: [],
    });
}
/*
jQuery.get()



const docRef = collection(db, 'user');


const AddData = async(e) =>{
    e.preventDefault();

    await addDoc(docRef, {
        user: "userName"
    })
}

AddData;
*/
//# sourceMappingURL=DataBase.js.map