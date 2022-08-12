import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Body from '../Components/Body';
import SelectPost from '../Components/SelectPost';

function Routing({ Data }) {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Body Data={Data}/>} />
                <Route path='/singlePost'  element={<SelectPost Data={Data}/>} />
            </Routes>
        </BrowserRouter>
    );

}

export default Routing;