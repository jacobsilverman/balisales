import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Body from '../Components/Body';
import SelectPost from '../Components/SelectPost';

function Routing() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Body/>} />
                <Route path='/singlePost'  element={<SelectPost/>} />
            </Routes>
        </BrowserRouter>
    );

}

export default Routing;