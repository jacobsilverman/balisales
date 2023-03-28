import { doc, addDoc, collection, getDocs, setDoc } from 'firebase/firestore';
import { db } from '../../firebase-config';

import { environment } from '../../Data/Constants/index';

const uid = localStorage.getItem("uid");
const displayName = localStorage.getItem("displayName");
const dbPath = environment()+"-discussions";

export const createDiscussion = async (body) => {
    const discussionCollectionRef = collection(db, dbPath);
    await addDoc(discussionCollectionRef, {
        body,
        comments: [],
        timeStamp: Date.now(),
        displayName: displayName || 'none',
        userId: uid || 'none'
    }).then((result) => {
        console.log(result);
    }).catch((err) => {
        console.error(err)
    })
}

export const getDiscussions = async () => {
    const discussionCollectionRef = collection(db, dbPath);
    const data = await getDocs(discussionCollectionRef);
    let allData = data.docs.map(async (doc) => {
        return { ...doc.data(), id: doc.id};
    });

    return Promise.all(allData);
};

export const addComment = async (item, comment) => {
    const discussionRef = doc(db, dbPath, item.id);

    await setDoc(discussionRef, {
        ...item,
        comments: [...item.comments, {comment, displayName, uid}]
    }).then((result) => {
        console.log("result: ", result);
    });
};

export const deleteComment = async (item, index) => {
    const discussionRef = doc(db, dbPath, item.id);
    item.comments.splice(index, 1);
    await setDoc(discussionRef, item).then((result) => {
        console.log("result: ", result);
    });
};