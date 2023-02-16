
import { Container, Row } from 'react-bootstrap';

import SettingsForm from './SettingsForm';
import Account from '../Account';

import './Settings.scss';

function Settings() {
    const id = localStorage.getItem("uid");

    return (
        <Container>
            <Row>
                <SettingsForm id={id} />
                <hr />
                <Account user={id} settingsPage={true} />
            </Row>
        </Container>
    );
}

export default Settings;