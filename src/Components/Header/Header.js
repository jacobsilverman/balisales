

import './Header.css';

import { Col, Container, Row } from 'react-bootstrap';

function Header() {
    return (
        <header className="App-header">
            <Container>
                <Row>
                    <Col xs={1}>
                        <a href='/'><i className="material-icons home">home</i></a>
                    </Col>
                    <Col xs={11} className="center title">
                        Sales
                    </Col>
                </Row>
                <Row className="center nav-bar">
                    <Col xs={4}>
                        Post
                    </Col>
                    <Col xs={4}>
                        Search
                    </Col>
                    <Col xs={4}>
                        Account
                    </Col>
                </Row>
            </Container>
        </header>
    );
}

export default Header;