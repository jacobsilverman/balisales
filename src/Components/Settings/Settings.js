import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import SettingsForm from './SettingsForm';
import Account from '../Account';

import './Settings.scss';
import { useTranslation } from 'react-i18next';

function Settings() {
    const id = localStorage.getItem("uid");
    const [showPosts, setShowPosts] = useState(true);
    const { t } = useTranslation();

    return (
        <>
            <Container className="setting-header-container">
                <Row>
                    <Col className="setting-header">
                        <h2>Settings</h2>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <SettingsForm id={id} />
                    <Col xs={12} className="info-dropdown setting-padding">
                        <h2 onClick={() => setShowPosts(cur => !cur)}>
                            {t('Posts')}&nbsp;&nbsp;
                            <i size="small" className='material-icons'>{ showPosts ? "visibility_off" : "visibility_on"}</i>
                        </h2>
                    </Col>
                    <hr />
                    {showPosts && <Account user={id} settingsPage={true} />}
                </Row>
            </Container>
        </>
    );
}

export default Settings;