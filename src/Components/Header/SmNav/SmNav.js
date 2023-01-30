
import { Link } from 'react-router-dom';

import { Col, Row } from 'react-bootstrap';


const SmNav = ({signInWithGoogle, showNav, closeNav, setShowNav, uid}) => {
    return (
        <Col className='remove-padding'>
            <div className="hamburger-menu">
                <input id="menu__toggle" type="checkbox" onClick={() => setShowNav(cur => !cur)} />
                <label className="menu__btn" htmlFor="menu__toggle">
                    <span></span>
                </label>
                {showNav && <div className="menu__background" onClick={closeNav} />}
                {showNav && <ul className="menu__box">
                    <li>
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
                    </li>
                    <li>
                        <Link className="white" to={{pathname: '/createPost'}}  onClick={closeNav}>
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
                    </li>
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
                    <li>
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
                    </li>
                    <li>
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
                    </li>
                </ul>}
            </div>
        </Col>
    );
   
}

export default SmNav;