import React, { useEffect, useState } from 'react';

import Routing from './Routing';

import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase-config';
import BuildMocks from './Data/Mocks/BuildMocks.js'

function App() {
  const [posts, setPosts] = useState([]);
  const postsCollectionRef = collection(db, "posts");

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id})))
      console.log(data.docs.map((doc) => ({ ...doc.data(), id: doc.id})));
    }
    getPosts();
  }, []);

  const MockData = BuildMocks();

  return (
    <Routing Data={MockData} />
  );
}

export default App;
