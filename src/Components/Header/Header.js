import { Link } from 'react-router-dom';

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
                    <Col xs={11} className="title">
                        Sales
                    </Col>
                </Row>
            </Container>
        </header>
    );
}

export default Header;