import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db, storage } from '../../firebase-config';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const uid = localStorage.getItem("uid");

export const setUserLogin = async (user) => {
    try {
        const currentUserDoc = doc(db, "accounts", user?.uid);
        const userData = await getDoc(currentUserDoc);
        if (!userData.data()) {
            await setDoc(currentUserDoc, {
                id: user?.uid
            });
        }
    }
    catch{
        console.log("error on login");
    }
}

export const getUserInfo = async (id) => {
    const currentUserDoc = doc(db, "accounts", id || uid);
    const docSnap = await getDoc(currentUserDoc);
    return docSnap.data();
}

export const addUserPost = async (postId) => {
    getUserInfo().then(async (userInfo) => {
        const currentUserDoc = doc(db, "accounts", uid);
        const payload = {...userInfo, posts: [...userInfo.posts, postId]}
        await setDoc(currentUserDoc, payload);
    });
}

export const deleteUserPost = async (postId) => {
    getUserInfo().then(async (userInfo) => {
        const currentUserDoc = doc(db, "accounts", uid);
        const payload = {...userInfo, posts: userInfo.posts.filter((item) => item !== postId)}
        await setDoc(currentUserDoc, payload);
    });
}

export const setUserInfo = async (payload, file) => {
    if (file !== '') {
        const pictureRef = ref(storage, `/profiles/${uid}`);
        await uploadBytesResumable(pictureRef, file);
    }
    
    const currentUserDoc = doc(db, "accounts", uid);
    await setDoc(currentUserDoc, payload);
    
    window.location.reload(false);
}

export const getProfilePicture = async (id) => {
    const pictureRef = ref(storage, `/profiles/${id}`);
    return await getDownloadURL(pictureRef);
}