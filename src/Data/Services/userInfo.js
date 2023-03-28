import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db, storage } from '../../firebase-config';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

import { environment } from '../../Data/Constants/index';

const uid = localStorage.getItem("uid");

export const setUserLogin = async (user) => {
    try {
        const currentUserDoc = doc(db, environment()+"-accounts", user?.uid);
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

export const getUserPosts = async (userId) => {
    return getUserInfo(userId).then(async (info)  => {
        if (!info?.posts) {
            return null;
        }
        
        const allUserPost = info.posts.map(async (id) => {
            const postDoc = doc(db, environment()+"-posts", id);
            const val = await getDoc(postDoc).then(async (doc) => {
                let parsedDoc = {...doc.data(), id: doc.id, urls: []};
                for (var i = 0; i<parsedDoc.numberOfImages; i++) {
                    const storage = await getStorage();
                    const listRef = ref(storage, `/${environment()}-postImages/${id}/image-${i}`);
                    await getDownloadURL(listRef)
                      .then((url) => {
                        parsedDoc.urls.push(url);
                      })
                      .catch((error) => {
                        console.error(error);
                      });
                };
                return parsedDoc;
            })
            return val;
        });
        return Promise.all(allUserPost).then((result) => {
            return result;
        });
    })
}

export const getUserInfo = async (id) => {
    const currentUserDoc = doc(db, environment()+"-accounts", id || uid);
    const docSnap = await getDoc(currentUserDoc);
    return docSnap.data();
}

export const addUserPost = async (postId) => {
    getUserInfo().then(async (userInfo) => {
        const currentUserDoc = doc(db, environment()+"-accounts", uid);
        const payload = {...userInfo, posts: [...userInfo.posts, postId]}
        await setDoc(currentUserDoc, payload);
    });
}

export const deleteUserPost = async (postId) => {
    getUserInfo().then(async (userInfo) => {
        const currentUserDoc = doc(db, environment()+"-accounts", uid);
        const payload = {...userInfo, posts: userInfo.posts.filter((item) => item !== postId)}
        await setDoc(currentUserDoc, payload);
    });
}

export const setUserInfo = async (payload, file) => {
    if (file !== '') {
        const pictureRef = ref(storage, `/${environment()}-profiles/${uid}`);
        await uploadBytesResumable(pictureRef, file);
    }
    
    const currentUserDoc = doc(db, environment()+"-accounts", uid);
    await setDoc(currentUserDoc, payload);
    
    window.location.reload(false);
}

export const getProfilePicture = async (id) => {
    const pictureRef = ref(storage, `/${environment()}-profiles/${id}`);
    return await getDownloadURL(pictureRef);
}