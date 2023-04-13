import { TextareaAutosize } from '@mui/base';
import "./ReportReview.scss";

import { Col, Row } from 'react-bootstrap';

import { Modal, Button, Rating } from "@mui/material";

const ReportReview = ({t, reference, setReference}) => {
    return (
        <Modal open={reference?.open}>
            <Row className="modal-background">
                <Col>
                    <Row className="modal-container">
                        <Col xs={12} style={{textAlign:"right"}}>
                            <Button size="small" color="error" variant="contained" id="paypal-exit-button" onClick={() => setReference({open: false})}>
                                <i className="material-icons">close</i>
                            </Button>
                        </Col>

                        <Col xs={3} >
                        </Col>
                        <Col xs={6}  className="center">
                            <TextareaAutosize style={{width: "100%"}} minRows={5} placeholder={t(reference?.type)+ " " +t("Description")} label={t("Description")} />

                        </Col>
                        <Col xs={12} className='center'>
                            <Rating
                                size="large"
                                precision={0.5}
                                onChange={(event, newValue) => {
                                    setReference(cur => {
                                        console.log("test:",{...cur, rating: newValue})
                                        return {...cur, rating: newValue}
                                    });
                                }}
                            />
                        </Col>
                        <Button>Submit</Button>
                    </Row>
                </Col>
            </Row>
        </Modal>
    );
}

export default ReportReview;