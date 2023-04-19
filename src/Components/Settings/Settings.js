import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import SettingsForm from './SettingsForm';
import Account from '../Account';

import './Settings.scss';

function Settings() {
    const id = localStorage.getItem("uid");
    const [showPosts, setShowPosts] = useState(true);

    return (
        <Container>
            <Row>
                <SettingsForm id={id} />
                <Col xs={12} className="info-dropdown">
                    <h2 onClick={() => setShowPosts(cur => !cur)}>
                        Posts&nbsp;&nbsp;
                        <i size="small" className='material-icons'>{ showPosts ? "visibility_off" : "visibility_on"}</i>
                    </h2>
                </Col>
                <hr />
                {showPosts && <Account user={id} settingsPage={true} />}
            </Row>
        </Container>
    );
}

export default Settings;