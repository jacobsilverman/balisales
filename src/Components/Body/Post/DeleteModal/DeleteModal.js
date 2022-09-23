import { Modal } from '@mui/material';
import { Button, Col, Row } from 'react-bootstrap';

const DeleteModal = ({deletePost, item, openDeleteModal, setOpenDeleteModal}) => {
    return (
        <Modal open={openDeleteModal}>
            <Row className="delete-modal">
                <Col xs={5} sm={5} md={2} className="modal-background center">
                    <Row>
                        <Col className="modal-title">Do you want to delete this post?</Col>
                    </Row>
                    <Row>
                        <Col xs={6}>
                            <Button onClick={() => {deletePost(item);setOpenDeleteModal(false)}}>yes</Button>
                        </Col>
                        <Col xs={6}>
                            <Button onClick={() => setOpenDeleteModal(false)}>no</Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Modal>
    );
};

export default DeleteModal;