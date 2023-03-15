import React, { useEffect, useState, Suspense } from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { getAllPosts, getPostsQuery, getPostsQuery2, getPostsQuery3 } from '../Data/Services/Home.js';

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

    useEffect(() => {
        let ignore = false;
        if (!ignore) {
          // getAllPosts().then((allPosts) => {
          //   setPosts(allPosts);
          // }).catch(() => {
          //   console.log("error getting posts");
          // });

          getPostsQuery("timeStamp", 10, 0).then((allPosts) => {
            setPosts(allPosts);
          }).catch((error) => {
            console.log("error getting posts => ", error);
          });
          // getPostsQuery3("condition", 10, 7).then((allPosts) => {
          //   setPosts(allPosts);
          // }).catch((error) => {
          //   console.log("error getting posts => ", error);
          // })
        };
        return () => { ignore = true };
    }, []);

    const loadMoreData = () => {
      setLoadingMoreData(true);
      getPostsQuery2("timeStamp", 5, posts[posts.length-1].timeStamp).then((allPosts) => {
        setPosts([...posts, ...allPosts]);
      }).catch((error) => {
        console.log("error getting posts => ", error);
      }).finally(() => {
        setLoadingMoreData(false);
      })
    }

    const filterConditions = () => {
      setLoadingMoreData(true);
      getPostsQuery3("condition", 10, 7).then((allPosts) => {
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
                    <Route path='/' element={<Body posts={posts} loadMoreData={loadMoreData} loadingMoreData={loadingMoreData} showFilter={showFilter} setShowFilter={setShowFilter} />} />
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