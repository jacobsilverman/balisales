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
    let ignore = false;
    if (!ignore) {
      (async function fetchData() {
        const data = await getDocs(postsCollectionRef);
        let allData = data.docs.map(async (doc) => {
  
          let parsedItem = { ...doc.data(), id: doc.id, urls: []};
  
          for (var i = 0; i<parsedItem.numberOfImages; i++) {
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
  
        Promise.all(allData).then((result) => {
          const sortedData = result.sort((prev, next) => {
            return next.timeStamp - prev.timeStamp;
          });
          
          setPosts(sortedData);
        })
      })()
    };
    return () => { ignore = true };
  }, []);

  return (
    <Routing posts={posts} />
  );
}

export default App;
