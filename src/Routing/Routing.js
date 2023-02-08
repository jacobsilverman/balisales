import React, { useEffect, useState, Suspense } from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { getAllPosts } from '../Data/Services/Home.js';

import Spinner from '../Data/Constants/Spinner';

import Header from '../Components/Header';
import Body from '../Components/Body';

const SelectPost = React.lazy(() => import('../Components/SelectPost'));
const CreatePost = React.lazy(() => import('../Components/CreatePost'));
const Settings = React.lazy(() => import('../Components/Settings'));
const Profile = React.lazy(() => import('../Components/Profile'));
const ContactUs = React.lazy(() => import('../Components/ContactUs'));
const AboutUs = React.lazy(() => import('../Components/AboutUs'));
const Discuss = React.lazy(() => import('../Components/Discuss'));

function Routing() {
    const [posts, setPosts] = useState([]);
    const [showFilter, setShowFilter] = useState(false);

    useEffect(() => {
        let ignore = false;
        if (!ignore) {
          getAllPosts().then((allPosts) => {
            setPosts(allPosts);
          }).catch(() => {
            console.log("error getting posts");
          });
        };
        return () => { ignore = true };
    }, []);

    return (
        <BrowserRouter>
            <Header posts={posts} setShowFilter={setShowFilter} />
            <Suspense fallback={<Spinner />}>
                <Routes>
                    <Route path='/' element={<Body posts={posts} showFilter={showFilter} setShowFilter={setShowFilter} />} />
                    <Route path='/singlePost' element={<SelectPost />} />
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