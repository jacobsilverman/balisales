import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../firebase-config';

import { environment } from '../../Data/Constants/index';

const uid = localStorage.getItem("uid");
const displayName = localStorage.getItem("displayName");

export const createContactUs = async (title, body) => {
    const discussionCollectionRef = collection(db, environment()+"-contact");
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