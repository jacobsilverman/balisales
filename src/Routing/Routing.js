import { useState } from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Body from '../Components/Body';
import SelectPost from '../Components/SelectPost';
import Account from '../Components/Account';
import CreatePost from '../Components/CreatePost';
import Header from '../Components/Header';
import Settings from '../Components/Settings';
import Profile from '../Components/Profile';
import ContactUs from '../Components/ContactUs';
import AboutUs from '../Components/AboutUs';
import Discuss from '../Components/Discuss';

function Routing({ posts }) {
    const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

    return (
        <BrowserRouter>
            <nav>
                <Header isAuth={isAuth} setIsAuth={setIsAuth} />
            </nav>
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
        </BrowserRouter>
    );
}

export default Routing;