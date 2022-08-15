import React, { useEffect, useState } from 'react';

import Routing from './Routing';

import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase-config';
import BuildMocks from './Data/Mocks/BuildMocks.js'

function App() {
  // const [mockData] =  useState(BuildMocks());
  const [posts, setPosts] = useState(BuildMocks());
  const postsCollectionRef = collection(db, "posts");

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      setPosts([...data.docs.map((doc) => ({ ...doc.data(), id: doc.id})), ...posts]);
    }
    getPosts();
  }, []);

  return (
    <Routing Data={posts} posts={posts} />
  );
}

export default App;
