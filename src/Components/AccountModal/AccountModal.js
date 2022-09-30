import { Col, Row } from 'react-bootstrap';
import { Modal } from '@mui/material';
import './AccountModal.scss';

import SocialMedia from '../SocialMedia';

import { getUserInfo, getProfilePicture } from '../../Data/Services/userInfo.js';
import { useEffect, useState } from 'react';

const AccountModal = ({item, openAccountModal, setOpenAccountModal}) => {
    const [user, setUser] = useState({});
    const [userImage, setUserImage] = useState("");

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
                    <Row>
                        <Col>
                            Display Name: {user.displayName}
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            {user.firstName} {user.lastName}
                        </Col>
                    </Row>

                </Col>
                <Col xs={5}>
                    <div style={{backgroundImage: `url(${userImage})`, backgroundSize: "100% 100%", height: "10vh"}} />
                </Col>
                <Col xs={1} className="exit-button">
                    <button className="btn btn-danger" onClick={() => {setOpenAccountModal(false)}}>x</button>
                </Col>
                <Row>
                    <Col xs={7}>
                        <SocialMedia instagram={user.instagram} facebook={user.facebook} />
                    </Col>
                </Row>
            </Row>

        </Modal>
    );
}

export default AccountModal;