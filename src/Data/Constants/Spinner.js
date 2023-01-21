import { ClipLoader } from "react-spinners";

import { Col, Row } from "react-bootstrap";

const Spinner = () => {
    return (<Row>
        <Col xs={12} className="center">
            <ClipLoader size={150} />
        </Col>
    </Row>);
}

export default Spinner;