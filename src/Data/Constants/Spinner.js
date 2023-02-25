import { SyncLoader } from "react-spinners";

import { Col } from "react-bootstrap";

const Spinner = () => {
    return (
        <Col xs={12} className="center" style={{paddingTop: "20px"}}>
            <SyncLoader size={10} color="pink" />
        </Col>
    );
}

export default Spinner;