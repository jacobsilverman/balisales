import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase-config';

import { getStorage, ref, getDownloadURL } from "firebase/storage";

export const getAllPosts = async () => {
    const postsCollectionRef = collection(db, "posts");
    const data = await getDocs(postsCollectionRef);
    let allData = data.docs.map(async (doc) => {
      let parsedItem = { ...doc.data(), id: doc.id, urls: []};

      for (var i = 0; i < parsedItem.numberOfImages; i++) {
        const storage = await getStorage();
        const listRef = ref(storage, `/PostImages/${doc.id}/image-${i}`);
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

    return Promise.all(allData).then((result) => {
      // const sortedData = result.sort((prev, next) => {
      //   return next.timeStamp - prev.timeStamp;
      // });
      
      return result;
    })
  };