import { Link } from 'react-router-dom';

import './Header.scss';

import { Col, Container, Row } from 'react-bootstrap';

import { auth, provider } from '../../firebase-config';
import { signInWithPopup, signOut } from 'firebase/auth';
import { useNavigate }   from 'react-router-dom';

function Header({isAuth, setIsAuth}) {
    let navigate = useNavigate();

    const signUserOut = () => {
        signOut(auth, provider).then(() => {
            setIsAuth(false);
            navigate("/");
            localStorage.clear();
        })
    }

    const signInWithGoogle = () => {
        signInWithPopup(auth, provider).then(() => {
            setIsAuth(true);
            localStorage.setItem("isAuth", true);
        })
    }

    return (
        <header className="App-header">
            <Container>
                <Row>
                    <Col xs={2} sm={2} md={2} className="remove-right-padding">
                        <a href="/">
                            <i className="material-icons home">home</i>
                        </a>
                    </Col>
                    <Col  xs={2} sm={2} md={2} >
                        <Link className="white" to={{pathname: '/createPost'}}><i className="material-icons home">add</i></Link>
                        
                    </Col>
                    <Col xs={4} sm={4} md={4} className="center title">
                        Sales 
                    </Col>
                    <Col xs={4} sm={4} md={4} className="vertical-bottom">
                        <Row>
                            <Col className="center pointer">
                                {!isAuth
                                ? <a onClick={signInWithGoogle}>Login</a>
                                : <a onClick={signUserOut}>Logout</a>}
                            </Col>
                        </Row>
                        <Row>
                            <Col  className="center">
                                {isAuth && <Link className="white" to={{pathname: '/account'}}>Account</Link>}
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </header>
    );
}

export default Header;