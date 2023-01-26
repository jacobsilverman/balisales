
import { Link } from 'react-router-dom';

import { Col, Row } from 'react-bootstrap';


const LgNav = ({signInWithGoogle, closeNav, uid}) => {
    return (
        <Col lg={8}>
            <Row>
                <Col xs={3}>
                    <a href="/">
                        <span className="menu__item">
                            <Row>
                                <Col xs={3} className="menu-icon">
                                    <i className="material-icons">home</i>
                                </Col>
                                <Col  xs={9}>
                                    Home
                                </Col>
                            </Row>
                        </span>
                    </a>
                </Col>
                <Col xs={3}>
                    <Link className="white" to={{pathname: uid && '/createPost'}} onClick={(uid && closeNav) || signInWithGoogle}>
                        <span className="menu__item">
                            <Row>
                                <Col xs={3} className="menu-icon">
                                    <i className="material-icons">add</i>
                                </Col>
                                <Col xs={9}>
                                    Create
                                </Col>
                            </Row>
                        </span>
                    </Link>
                </Col>
                {/* <li>
                    <Link className="white" to={{pathname: '/discuss'}}>
                        <span className="menu__item">
                            <Row>
                                <Col xs={3} className="menu-icon">
                                    <i className="material-icons">psychology</i>
                                </Col>
                                <Col xs={9}>
                                    Discuss
                                </Col>
                            </Row>
                        </span>
                    </Link>
                </li> */}
                <Col xs={3}>
                    <Link className="white" to={{pathname: '/contactUs'}} onClick={closeNav}>
                        <span className="menu__item">
                            <Row>
                                <Col xs={3} className="menu-icon">
                                    <i className="material-icons">contact_support</i>
                                </Col>
                                <Col xs={9}>
                                    Contact
                                </Col>
                            </Row>
                        </span>
                    </Link>
                </Col>
                <Col xs={3}>
                    <Link className="white" to={{pathname: '/aboutUs'}} onClick={closeNav}>
                        <span className="menu__item">
                            <Row>
                                <Col xs={3} className="menu-icon">
                                    <i className="material-icons">face</i>
                                </Col>
                                <Col xs={9}>
                                    About Us
                                </Col>
                            </Row>
                        </span>
                    </Link>
                </Col>
            </Row>
        </Col>
    );
};

export default LgNav;