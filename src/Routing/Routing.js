import { useState } from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Body from '../Components/Body';
import SelectPost from '../Components/SelectPost';
import Account from '../Components/Account';
import CreatePost from '../Components/CreatePost';
import Header from '../Components/Header';

function Routing({ Data, posts }) {

    console.log("atuh: ",localStorage.getItem("isAuth"));

    const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

    return (
        <BrowserRouter>
            <nav>
                <Header isAuth={isAuth} setIsAuth={setIsAuth} />
            </nav>
            <Routes>
                <Route path='/' element={<Body Data={Data} />} />
                <Route path='/singlePost' element={<SelectPost Data={Data} />} />
                <Route path='/account' element={<Account posts={posts} />} />
                <Route path='/createPost' element={<CreatePost />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Routing;