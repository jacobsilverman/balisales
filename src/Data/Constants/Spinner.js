import { SyncLoader } from "react-spinners";

import { Col, Row } from "react-bootstrap";

const Spinner = () => {
    return (
        <Row>
            <Col xs={12} className="center" style={{paddingTop: "20px"}}>
                <SyncLoader size={10} color="pink" />
            </Col>
        </Row>
    );
}

export default Spinner;