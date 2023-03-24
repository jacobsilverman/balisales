import { collection, getDocs, query, where, orderBy, limit, startAfter } from 'firebase/firestore';
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
    return result;
  })
};


export const getPostsQuery = async (order, lim) => {
  const postsCollectionRef = collection(db, "posts");
  
  const q = query(postsCollectionRef, orderBy(order, "desc"), limit(lim));
  const data = await getDocs(q);
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
    return result;
  })
}

export const getPostsQueryStart = async (order, lim, start) => {
  const postsCollectionRef = collection(db, "posts");
  
  const q = query(postsCollectionRef, orderBy(order, "desc"), limit(lim), startAfter(start));
  const data = await getDocs(q);
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
    return result;
  })
}


export const getPostsQuery3 = async (order, lim, w) => {
  const postsCollectionRef = collection(db, "posts");
  const q = query(postsCollectionRef, where(order, ">=", w), limit(lim));
  const data = await getDocs(q);
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
    return result;
  })
}