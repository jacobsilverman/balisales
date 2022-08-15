import { Link } from 'react-router-dom';

import './Header.css';

import { Col, Container, Row } from 'react-bootstrap';

import { auth, provider } from '../../firebase-config';
import { signInWithPopup, signOut } from 'firebase/auth';
import { useNavigate }   from 'react-router-dom';

function Header({isAuth, setIsAuth}) {
    let navigate = useNavigate();

    const signUserOut = () => {
        signOut(auth).then(() => {
            navigate("/");
            setIsAuth(false);
        });
    }

    const signInWithGoogle = () => {
        signInWithPopup(auth, provider).then((result) => {
            setIsAuth(true);
            navigate("/");
        });
    }

    return (
        <header className="App-header">
            <Container>
                <Row>
                    <Col xs={3} sm={2} className="white-background remove-right-padding">
                        <Link className="white" to={{pathname: '/'}}>
                            <i className="material-icons home">home</i>
                        </Link>
                    </Col>
                    <Col xs={9} sm={10} className="center title">
                        Balisong Sales 
                        <Row className="center nav-bar">
                            <Col xs={4}>
                                <Link className="white" to={{pathname: '/createPost'}}>Post</Link>
                            </Col>
                            <Col xs={4}>
                                <Link className="white" to={{pathname: '/account'}}>Account</Link>
                            </Col>
                            <Col xs={4}>
                                {!isAuth 
                                ? <a onClick={signInWithGoogle}>Login</a>
                                : <a onClick={signUserOut}>Logout</a>}
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </header>
    );
}

export default Header;