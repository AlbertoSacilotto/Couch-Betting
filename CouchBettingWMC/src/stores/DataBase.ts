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

    console.log("LoginData");
    console.log(docRef);
}

