import { useState } from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Body from '../Components/Body';
import SelectPost from '../Components/SelectPost';
import Login from '../Components/Login';
import Account from '../Components/Account';
import CreatePost from '../Components/CreatePost';
import Header from '../Components/Header';

function Routing({ Data, posts }) {
    const [isAuth, setIsAuth] = useState(false);

    console.log(isAuth);

    return (
        <BrowserRouter>
            <nav>
                <Header isAuth={isAuth} setIsAuth={setIsAuth} />
            </nav>
            <Routes>
                <Route path='/' element={<Body Data={Data} />} />
                <Route path='/singlePost'  element={<SelectPost Data={Data} />} />
                <Route path='/login'  element={<Login setIsAuth={setIsAuth} />} />
                <Route path='/account'  element={<Account posts={posts} />} />
                <Route path='/createPost'  element={<CreatePost />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Routing;