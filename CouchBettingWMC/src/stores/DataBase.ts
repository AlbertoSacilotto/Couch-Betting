import {db} from "./Firebase";
import {AccountManager} from "./Accounts";
import { addDoc, collection, serverTimestamp, query, orderBy} from 'firebase/firestore';
/*import { collectionData } from 'rxfire/firestore';
import { startWith } from 'rxjs/operators';
import { onMount } from 'svelte';*/

import { doc, setDoc, getDoc, runTransaction  } from "firebase/firestore";

// Add a new document in collection "cities"
export async function addFireUser()
{
    await setDoc(doc(db, "user", "1"), {
        id: Number(localStorage.getItem('uid')),
        name: localStorage.getItem('username'),
        email: localStorage.getItem('email'),
        coins: 10000,
        bets: [],
        historyBets: [],
    });
}

export async function getFireUser()
{
    console.log(db);

    const docRef = collection(db, 'user');

    /*localStorage.setItem('username', docRef);
    localStorage.setItem('email', res.user.email);
    localStorage.setItem('profilePic', res.user.photoURL);*/

    console.log("LoginData");
    console.log(docRef);
    //am.LogIn(user.email);
}
/*
try {
    await runTransaction(db, async (transaction) => {
        const sfDoc = await transaction.get(sfDocRef);
        if (!sfDoc.exists()) {
            throw "Document does not exist!";
        }

        const newPopulation = sfDoc.data().population + 1;
        transaction.update(sfDocRef, { population: newPopulation });
    });
    console.log("Transaction successfully committed!");
} catch (e) {
    console.log("Transaction failed: ", e);
}

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
