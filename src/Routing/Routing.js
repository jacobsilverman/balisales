import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Body from '../Components/Body';
import SelectPost from '../Components/SelectPost';
import Account from '../Components/Account';

function Routing({ Data }) {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Body Data={Data}/>} />
                <Route path='/singlePost'  element={<SelectPost Data={Data}/>} />
                <Route path='/account'  element={<Account/>} />
            </Routes>
        </BrowserRouter>
    );

}

export default Routing;