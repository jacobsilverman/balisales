import React, { useEffect, useState } from 'react';

import Routing from './Routing';

import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase-config';


import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";
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
        const pathReference = ref(storage, `PostImages/${doc.id}`); 
        let parsedItem = { ...doc.data(), imageUrls: [], id: doc.id};
        await listAll(pathReference)
          .then(async (res) => {
            res.items.forEach(async (itemRef) => {
              const pathReference = ref(storage, itemRef._location.path_); 
              parsedItem.imageUrls.push(await getDownloadURL(pathReference)
                .then((url) => {
                  return url;
                })
                .catch((error) => {
                  console.error(error.code);
                })
              )
            });
          }).catch((error) => {
            console.error(error.code);
          });
        return parsedItem;
      });
      
      Promise.all(allData).then((result) => {
        const sortedData = result.sort((prev, next) => {
          return (prev.timeStamp <= next.timeStamp) ? 1 : -1;
        });
        setPosts(sortedData);
      });
    })();
  }, []);

  return (
    <Routing posts={posts} />
  );
}

export default App;
