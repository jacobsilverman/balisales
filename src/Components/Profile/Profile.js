import { useEffect, useState } from 'react';

import { getUserInfo } from '../../Data/Services/userInfo.js';

import { Container, Col, Row } from 'react-bootstrap';

const Profile = () => {
    const [data, setData] = useState({});

    useEffect(() => {
        getUserInfo().then((result) => {
            setData(result);
        });
    }, []);

    console.log("data: ", data);

    return (
        <Container>
            <Row>
                <Col>
                    user Id
                </Col>
                <Col>
                    {data.id}
                </Col>
            </Row>
        </Container>
    );
}

export default Profile;