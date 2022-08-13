// import React, { useCallback } from 'react';
// import { useNavigate } from 'react-router-dom';

import './Header.css';

import { Col, Container, Row } from 'react-bootstrap';

function Header() {
    // const navigate = useNavigate();
    // const handleOnClick = useCallback(() => navigate('/account', {replace: true}), [navigate]);

    return (
        <header className="App-header">
            <Container>
                <Row>
                    <Col xs={3} sm={2} className="white-background remove-right-padding">
                        <a href='/'><i className="material-icons home">home</i></a>
                    </Col>
                    <Col xs={9} sm={10} className="center title">
                        Sales 
                        <Row className="center nav-bar">
                            <Col xs={4}>
                                Post
                            </Col>
                            <Col xs={4}>
                                Search
                            </Col>
                            <Col xs={4}>
                                <a className="white" href="/account">Account</a>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </header>
    );
}

export default Header;