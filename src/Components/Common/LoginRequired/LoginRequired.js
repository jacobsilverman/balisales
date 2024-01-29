import './LoginRequired.scss';
import { Container , Col, Row} from "react-bootstrap";

import { useTranslation } from "react-i18next";

export const LoginRequired = () => {
    const { t } = useTranslation();

    return (
        <>
            <Container className="login-header-container">
                <Row>
                    <Col className="login-header">
                        <h2>{t("Information Missing")}</h2>
                    </Col>
                </Row>
            </Container>
            <Container className="require-login-info">
                <Row>
                    <Col xs={12}>
                        <h3>
                            Please login before trying to continue
                        </h3>
                    </Col>
                </Row>
            </Container>
        </>
    );
}