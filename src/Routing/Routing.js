import React, { Suspense, useState } from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Spinner from '../Data/Constants/Spinner';

import Header from '../Components/Header';

const Body  = React.lazy(() => import('../Components/Body'));
const SelectPost = React.lazy(() => import('../Components/SelectPost'));
const Account = React.lazy(() => import('../Components/Account'));
const CreatePost = React.lazy(() => import('../Components/CreatePost'));
const Settings = React.lazy(() => import('../Components/Settings'));
const Profile = React.lazy(() => import('../Components/Profile'));
const ContactUs = React.lazy(() => import('../Components/ContactUs'));
const AboutUs = React.lazy(() => import('../Components/AboutUs'));
const Discuss = React.lazy(() => import('../Components/Discuss'));


function Routing({ posts }) {
    const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

    return (
        <BrowserRouter>
            <nav>
                <Header isAuth={isAuth} setIsAuth={setIsAuth} />
            </nav>
            <Suspense fallback={<Spinner />}>
                <Routes>
                    <Route path='/' element={<Body posts={posts} />} />
                    <Route path='/singlePost' element={<SelectPost />} />
                    <Route path='/account' element={<Account />} />
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