import { doc, addDoc, collection, getDocs, setDoc } from 'firebase/firestore';
import { db, storage } from '../../firebase-config';

const uid = localStorage.getItem("uid");
const displayName = localStorage.getItem("displayName");

export const createDiscussion = async (body) => {
    const discussionCollectionRef = collection(db, "discussions");
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
    const discussionCollectionRef = collection(db, "discussions");
    const data = await getDocs(discussionCollectionRef);
    let allData = data.docs.map(async (doc) => {
        return { ...doc.data(), id: doc.id};
    });

    return Promise.all(allData);
};

export const addComment = async (item, comment) => {
    console.log("item: ", item);
    const discussionRef = doc(db, "discussions", item.id);

    await setDoc(discussionRef, {
        ...item,
        comments: [...item.comments, {comment, displayName, uid}]
    }).then((result) => {
        console.log("result: ", result);
    });
};

export const deleteComment = async (item, index) => {
    const discussionRef = doc(db, "discussions", item.id);
    item.comments.splice(index, 1);

    await setDoc(discussionRef, {
        ...item,
        comments: item.comments
    }).then((result) => {
        console.log("result: ", result);
    });
};