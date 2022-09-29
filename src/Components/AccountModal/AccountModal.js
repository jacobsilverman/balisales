import { Col, Row } from 'react-bootstrap';
import { Modal } from '@mui/material';
import './AccountModal.scss';

import { getUserInfo, getProfilePicture } from '../../Data/Services/userInfo.js';
import { useEffect, useState } from 'react';

const AccountModal = ({item, openAccountModal, setOpenAccountModal}) => {
    const [user, setUser] = useState({});
    const [useImage, setUserImage] = useState("");

    useEffect(() => {
        getUserInfo(item.author.id).then((result) => {
            setUser(result);
        });
        getProfilePicture(item.author.id).then((r) => {
            setUserImage(r);
        });
    },[]);

    return (
        <Modal open={openAccountModal} className="account-modal">
            <Row className="account-modal-content">
                <Col xs={6}>
                    {user.displayName}
                    
                </Col>
                <Col xs={6}>
                    <div style={{backgroundImage: `url(${useImage})`, backgroundSize: "100% 100%", height: "10vh", width: '10vw'}} />
                </Col>
            </Row>
        </Modal>
    );
}

export default AccountModal;