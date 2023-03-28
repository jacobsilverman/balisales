import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase-config';
import { ref, getDownloadURL, getStorage } from "firebase/storage";

import { environment } from '../../Data/Constants/index';

export const getPost = async (id) => {
    const docRef = doc(db, environment()+"-posts", id);
    const postData = await getDoc(docRef).then(async (data) => {
        let parsedItem = { ...data.data(), id: data.id, urls: []};

        for (var i = 0; i < parsedItem.numberOfImages; i++) {
          const storage = await getStorage();
          const listRef = ref(storage, `/${environment()}-postImages/${data.id}/image-${i}`);
          await getDownloadURL(listRef)
            .then((url) => {
              parsedItem.urls.push(url);
            })
            .catch((error) => {
              console.error(error);
            });
        };

        return parsedItem;
    });
    return postData;
}