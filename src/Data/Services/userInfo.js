import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '../../firebase-config';

const uid = localStorage.getItem("uid");

export const setUserLogin = async (user) => {
    try {
        const currentUserDoc = doc(db, "accounts", user?.uid);
        const userData = await getDoc(currentUserDoc);
        if (!userData.data()) {
            await setDoc(currentUserDoc, {
                id: user?.uid
            });
            console.log("hit");
        }
    }
    catch{
        console.log("error on login");
    }
}

export const getUserInfo = async () => {
    const currentUserDoc = doc(db, "accounts", uid);
    const docSnap = await getDoc(currentUserDoc);
    return docSnap.data();
}

export const setUserInfo = async (payload) => {
    const currentUserDoc = doc(db, "accounts", uid);
    return await setDoc(currentUserDoc, payload);
}