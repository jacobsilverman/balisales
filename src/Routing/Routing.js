import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Body from '../Components/Body';
import SelectPost from '../Components/SelectPost';
import Account from '../Components/Account';
import CreatePost from '../Components/CreatePost';

function Routing({ Data }) {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Body Data={Data}/>} />
                <Route path='/singlePost'  element={<SelectPost Data={Data}/>} />
                <Route path='/account'  element={<Account/>} />
                <Route path='/createPost'  element={<CreatePost/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default Routing;