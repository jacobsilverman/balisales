import { Col, Container, Row } from 'react-bootstrap';
import { doc } from 'firebase/firestore';
import { db } from '../../firebase-config';

function Settings() {
    const getUserInfo = async () => {
        const uid = localStorage.getItem("uid");
        console.log(uid);
        const currentUserDoc = doc(db, "accounts", uid);
        console.log(currentUserDoc);
    }
    getUserInfo();

    return (
        <Container>
            <Row>
                <Col xs={12} className="center">
                    <Row>
                        <Col xs={12}>
                            <label>First name</label>
                        </Col>
                        <Col xs={12}>
                            <input />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12}>
                            <label>Last name</label>
                        </Col>
                        <Col xs={12}>
                            <input />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12}>
                            <label>Display name</label>
                        </Col>
                        <Col xs={12}>
                            <input />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12}>
                            <label>Username</label>
                        </Col>
                        <Col xs={12}>
                            <input />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12}>
                            <label>Phone number</label>
                        </Col>
                        <Col xs={12}>
                            <input />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12}>
                            <label>Profile Picture</label>
                        </Col>
                        <Col xs={12}>
                            <input />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12}>
                            <label>Instagram Url</label>
                        </Col>
                        <Col xs={12}>
                            <input />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12}>
                            <label>Facebook Url</label>
                        </Col>
                        <Col xs={12}>
                            <input />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default Settings;