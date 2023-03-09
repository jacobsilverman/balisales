import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../firebase-config';

const uid = localStorage.getItem("uid");
const displayName = localStorage.getItem("displayName");

export const createContactUs = async (title, body) => {
    const discussionCollectionRef = collection(db, "contact");
    await addDoc(discussionCollectionRef, {
        title,
        body,
        timeStamp: Date.now(),
        displayName: displayName || 'none',
        userId: uid || 'none'
    }).then((result) => {
        console.log(result);
    }).catch((err) => {
        console.error(err)
    })
}