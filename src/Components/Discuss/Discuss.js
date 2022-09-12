import { Col, Container, Row } from 'react-bootstrap';
import './Discuss.scss';

var Discuss = () => {
    return (
        <Container className="discuss-container">
            <Row>
                <Col xs={2} lg={1}>
                    <h3>Goal:</h3>
                </Col>
                <Col xs={10} lg={11}>
                    <h4>As an ongoing project there are many different routes to facilitate the needs of the users on this site. Here are a list of potential improvements that each user can vote on so the community can help determine which pathes to prioritize and which improvements are obselete.</h4>
                </Col>
            </Row>
            
            <Row>
                <Col xs={12}>
                    <h5>
                        Probably the most irritating part of buying, selling or trading balisongs is the unknown factor of who you are buying from and whether they will scam you. 
                    </h5>
                </Col>
            </Row>
        </Container>
    );
}

export default Discuss;