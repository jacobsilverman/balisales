import { Modal } from '@mui/material';
import { Button, Col, Row } from 'react-bootstrap';

const DeleteModal = ({deletePost, item, openDeleteModal, setOpenDeleteModal, setOpenEditModal}) => {
    return (
        <Modal open={openDeleteModal} id="delete-modal">
            <Row className="modal-dialog delete-modal">
                <Col xs={5} sm={5} md={2} className="modal-content modal-background center">
                    <Row className="modal-header">
                        <Col className="modal-title">Do you want to delete this post?</Col>
                    </Row>
                    <Row>
                    <Col xs={6}>
                            <Button onClick={() => setOpenDeleteModal(false)}>no</Button>
                        </Col>
                        <Col xs={6}>
                            <Button onClick={() => {deletePost(item).then(() => setOpenEditModal(false));setOpenDeleteModal(false)}}>yes</Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Modal>
    );
};

export default DeleteModal;