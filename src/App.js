import React, { useEffect, useState } from 'react';

import Routing from './Routing';

import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase-config';


import { getStorage, ref, getDownloadURL } from "firebase/storage";
// import BuildMocks from './Data/Mocks/BuildMocks.js'

function App() {
  const [posts, setPosts] = useState([]);
  const postsCollectionRef = collection(db, "posts");

  useEffect(() => {
    let allData;
    (async () => {
      const data = await getDocs(postsCollectionRef);
      allData = data.docs.map(async (doc) => {
        const storage = await getStorage();
        const pathReference = ref(storage, `files/${doc.id}`); 
        let parsedItem = { ...doc.data(), id: doc.id};
        await getDownloadURL(pathReference)
          .then((url) => {
            parsedItem.url = url;
          })
          .catch((error) => {
            console.error(error.code);
          });
        return parsedItem;
      });
      
      Promise.all(allData).then((result) => {
        setPosts(result.sort((prev, next) => {
          return (prev.timeStamp <= next.timeStamp) ? 1 : -1;
        }));
      })
      
    })();
  }, []);

  return (
    <Routing posts={posts} />
  );
}

export default App;
