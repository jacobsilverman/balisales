import React, { useState } from 'react';
import './Donate.scss';
import { Col, Row } from 'react-bootstrap';
import { Button, FormControl, InputLabel, MenuItem, Modal, Select } from '@mui/material';
import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";

import Spinner from '../../Data/Constants/Spinner.js';
import { useTranslation } from 'react-i18next';

const Donate = ({showDonate, setShowDonate}) => {
    const [{ options, isPending }, dispatch] = usePayPalScriptReducer();
    const [currency, setCurrency] = useState(options.currency);
    const { t } = useTranslation();


    const onCurrencyChange = ({ target: { value } }) => {
        setCurrency(value);
        dispatch({
            type: "resetOptions",
            value: {
                ...options,
                currency: value,
            },
        });
    }

    const onCreateOrder = (data,actions) => {
        return actions.order.create({
            purchase_units: [
                {
                    amount: {
                        value: "8.99",
                    },
                },
            ],
        });
    }

    const onApproveOrder = (data,actions) => {
        return actions.order.capture().then((details) => {
            const name = details.payer.name.given_name;
            alert(`Transaction completed by ${name}`);
        });
    }

    return (
        <Modal open={showDonate}>
            <Row className="edit-modal">
                <Col xs={7} className="modal-background-paypal center">
                {isPending ? <Spinner /> : (
                    <Row>
                        <Col>
                            <FormControl fullWidth id="paypal-currency-selector">
                                <InputLabel id="paypal-currency-label">{t("Currency")}</InputLabel>
                                <Select
                                    labelId={currency+"-paypal-currency-label"}
                                    id={currency+"-paypal-currency-label"}
                                    label={t("Currency")}
                                    defaultValue=""
                                    value={currency}
                                    onChange={onCurrencyChange}>
                                    <MenuItem value="USD">$ USD</MenuItem>
                                    <MenuItem value="EUR">€ Euro</MenuItem>
                                    <MenuItem value="GBP">£ U.K. Pound</MenuItem>
                                    <MenuItem value="CHF">₣ Swiss Franc</MenuItem>
                                    <MenuItem value="JPY">¥ Japanese Yen</MenuItem>
                                    <MenuItem value="CAD">C$ Canadian loonie</MenuItem>
                                    <MenuItem value="MXN">M$ Mexican Peso</MenuItem>
                                </Select>
                            </FormControl>
                        </Col>
                        <Col xs={2}>
                            <Button variant="outlined" id="paypal-exit-button" onClick={() => setShowDonate(false)}>
                                <i className="material-icons">close</i>
                            </Button>
                        </Col>
                        <PayPalButtons 
                            style={{ layout: "vertical", color: "silver" }}
                            createOrder={(data, actions) => onCreateOrder(data, actions)}
                            onApprove={(data, actions) => onApproveOrder(data, actions)}
                        />
                    </Row>
                )}
                </Col>
            </Row>
        </Modal>
    );
}

export default Donate;