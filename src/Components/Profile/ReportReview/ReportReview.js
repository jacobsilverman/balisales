import { TextareaAutosize } from '@mui/base';
import "./ReportReview.scss";

import { Col, Row } from 'react-bootstrap';

import { updateUser } from '../../../Data/Services/userInfo'

import { Modal, Button, Rating } from "@mui/material";

const ReportReview = ({t, id, userData, reference, setReference}) => {

    const submitRR = () => {
        let payload = {...userData};
        let type;

        if (reference?.type === "Report") {
            type = 'reports';
        } else {
            type = 'reviews';
        }
        
        if (!payload[type]) {
            payload[type] = [];
        }

        payload[type].push(reference);
        
        updateUser(id , {[type]: payload[type]}).then((r) => {
            console.log(r);
        }).catch((err) => {
            alert("something went wrong adding your review - ", err);
        }).finally(() => {
            setReference(cur => {return {...cur, open:false}});
        });
    }

    return (
        <Modal open={reference?.open}>
            <Row className="modal-dialog offset-top">
                <Col className="modal-content modal-background">
                    <Row>
                        <Col xs={9}>
                            <h2>Write a {(reference?.type === "Report") ? "Report" : "Review"}</h2>
                        </Col>
                        <Col xs={3} style={{textAlign:"right"}}>
                            <Button size="small" color="error" variant="contained" id="paypal-exit-button" onClick={() => setReference({open: false})}>
                                <i className="material-icons">close</i>
                            </Button>
                        </Col>
                        <Col xs={12}  className="center">
                            <TextareaAutosize 
                                style={{width: "100%"}} 
                                minRows={3} 
                                maxLength={84}
                                placeholder={t("Description")} 
                                label={t("Description")}
                                onChange={(event) => {
                                    setReference(cur => {
                                        return {...cur, message: event.target.value}
                                    });
                                }} />

                        </Col>
                        <Col xs={12} className='center'>
                            {reference?.type ==="Reference" && <Rating
                                size="large"
                                onChange={(event, newValue) => {
                                    setReference(cur => {
                                        return {...cur, rating: newValue}
                                    });
                                }}
                            />}
                        </Col>
                        <Button onClick={submitRR}>Submit</Button>
                    </Row>
                </Col>
            </Row>
        </Modal>
    );
}

export default ReportReview;