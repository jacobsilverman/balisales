import React, { useEffect, useState, Suspense } from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { getAllPosts, getPostsQuery, getPostsQueryStart } from '../Data/Services/Home.js';

import Spinner from '../Data/Constants/Spinner';

import Header from '../Components/Header';
import Body from '../Components/Body';

const CreatePost = React.lazy(() => import('../Components/CreatePost'));
const Settings = React.lazy(() => import('../Components/Settings'));
const Profile = React.lazy(() => import('../Components/Profile'));
const ContactUs = React.lazy(() => import('../Components/ContactUs'));
const AboutUs = React.lazy(() => import('../Components/AboutUs'));
const Discuss = React.lazy(() => import('../Components/Discuss'));

function Routing() {
  const [posts, setPosts] = useState([]);
  const [showFilter, setShowFilter] = useState(false);
  const [loadingMoreData, setLoadingMoreData] = useState(false);

  function load(){                
    var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    if (isSafari){
      alert("Performance with Safari is known to be slow, for the best experience please switch to Chrome. To download Chrome for, go to - http://www.google.com/ and download Chrome.");
    }
  }

  useEffect(() => {
    let ignore = false;
    if (!ignore) {
      load();
      getPostsQuery("timeStamp", 20, 0).then((allPosts) => {
        setPosts(allPosts);
      }).catch((error) => {
        console.log("error getting posts => ", error);
      });
    };
    return () => { ignore = true };
  }, []);

  const loadMoreData = (postLen, setShowMoreAllButtons) => {
    setLoadingMoreData(true);
    getPostsQueryStart("timeStamp", 20, posts[posts.length-1].timeStamp).then((allPosts) => {
      const combine = [...posts, ...allPosts];
      setPosts(combine);
      if (combine.length === postLen){
        setShowMoreAllButtons(false);
      }
    }).catch((error) => {
      console.log("error getting posts => ", error);
    }).finally(() => {
      setLoadingMoreData(false);
    })
  }

  const loadAllData = () => {
    setLoadingMoreData(true);
    getAllPosts().then((allPosts) => {
      setPosts(allPosts);
    }).catch((error) => {
      console.log("error getting posts => ", error);
    }).finally(() => {
      setLoadingMoreData(false);
    })
  }

  return (
      <BrowserRouter>
          <Header posts={posts} setShowFilter={setShowFilter} />
          <Suspense fallback={<Spinner />}>
              <Routes>
                  <Route path='/' element={<Body posts={posts} loadAllData={loadAllData} loadMoreData={loadMoreData} loadingMoreData={loadingMoreData} showFilter={showFilter} setShowFilter={setShowFilter} />} />
                  <Route path='/createPost' element={<CreatePost />} />
                  <Route path="/settings" element={<Settings />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/contactUs" element={<ContactUs />} />
                  <Route path="/aboutUs" element={<AboutUs />} />
                  <Route path="/discuss" element={<Discuss />} />
              </Routes>
          </Suspense>
      </BrowserRouter>
  );
}

export default Routing;