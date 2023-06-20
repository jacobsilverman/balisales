import { Modal } from '@mui/material';
import { Button, Col, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const DeleteModal = ({deletePost, item, openDeleteModal, setOpenDeleteModal, setOpenEditModal}) => {
    const { t } = useTranslation();
    return (
        <Modal open={openDeleteModal} id="delete-modal">
            <Row className="modal-dialog delete-modal">
                <Col xs={5} sm={5} md={2} className="modal-content modal-background-edit center">
                    <Row className="modal-header">
                        <Col className="modal-title">{t("Do you want to delete this post?")}</Col>
                    </Row>
                    <Row>
                    <Col xs={6}>
                            <Button onClick={() => setOpenDeleteModal(false)}>{t("No")}</Button>
                        </Col>
                        <Col xs={6}>
                            <Button onClick={() => {deletePost(item).then(() => setOpenEditModal(false));setOpenDeleteModal(false)}}>{t("Yes")}</Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Modal>
    );
};

export default DeleteModal;