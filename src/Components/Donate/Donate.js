import React, { useState } from 'react';
import './Donate.scss';
import { Col, Row } from 'react-bootstrap';
import { Button, FormControl, InputLabel, MenuItem, Modal, Select, TextField } from '@mui/material';
import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";

import Spinner from '../../Data/Constants/Spinner.js';
import { useTranslation } from 'react-i18next';
import { isMobile } from '../../Data/Constants';

const Donate = ({showDonate, setShowDonate}) => {
    const [{ options, isPending }, dispatch] = usePayPalScriptReducer();
    const [currency, setCurrency] = useState(options.currency);
    const [amount, setAmount] = useState(.01);
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
                        value: ""+amount
                    },
                },
            ],
        });
    }

    const changeAmount = (e) => {
        const val = e.target.value;
        if (val < 0 || val === '-' ) {
            return
        }
        setAmount(val);
    }

    const onApproveOrder = (data,actions) => {
        return actions.order.capture().then((details) => {
            const name = details.payer.name.given_name;
            alert(`Transaction completed by ${name}`);
        });
    }
    const paypalIcon = (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="32" viewBox="0 0 24 32" preserveAspectRatio="xMinYMin meet"><path fill="#009cde" opacity="1" d="M 20.924 7.157 C 21.204 5.057 20.924 3.657 19.801 2.357 C 18.583 0.957 16.43 0.257 13.716 0.257 L 5.758 0.257 C 5.29 0.257 4.729 0.757 4.634 1.257 L 1.358 23.457 C 1.358 23.857 1.639 24.357 2.107 24.357 L 6.975 24.357 L 6.694 26.557 C 6.6 26.957 6.881 27.257 7.255 27.257 L 11.375 27.257 C 11.844 27.257 12.311 26.957 12.405 26.457 L 12.405 26.157 L 13.247 20.957 L 13.247 20.757 C 13.341 20.257 13.809 19.857 14.277 19.857 L 14.84 19.857 C 18.864 19.857 21.954 18.157 22.89 13.157 C 23.358 11.057 23.172 9.357 22.048 8.157 C 21.767 7.757 21.298 7.457 20.924 7.157 L 20.924 7.157"/><path fill="#012169" opacity="1" d="M 20.924 7.157 C 21.204 5.057 20.924 3.657 19.801 2.357 C 18.583 0.957 16.43 0.257 13.716 0.257 L 5.758 0.257 C 5.29 0.257 4.729 0.757 4.634 1.257 L 1.358 23.457 C 1.358 23.857 1.639 24.357 2.107 24.357 L 6.975 24.357 L 8.286 16.057 L 8.192 16.357 C 8.286 15.757 8.754 15.357 9.315 15.357 L 11.655 15.357 C 16.243 15.357 19.801 13.357 20.924 7.757 C 20.831 7.457 20.924 7.357 20.924 7.157"/><path fill="#003087" opacity="1" d="M 9.504 7.157 C 9.596 6.857 9.784 6.557 10.065 6.357 C 10.251 6.357 10.345 6.257 10.532 6.257 L 16.711 6.257 C 17.461 6.257 18.208 6.357 18.772 6.457 C 18.958 6.457 19.146 6.457 19.333 6.557 C 19.52 6.657 19.707 6.657 19.801 6.757 C 19.894 6.757 19.987 6.757 20.082 6.757 C 20.362 6.857 20.643 7.057 20.924 7.157 C 21.204 5.057 20.924 3.657 19.801 2.257 C 18.677 0.857 16.525 0.257 13.809 0.257 L 5.758 0.257 C 5.29 0.257 4.729 0.657 4.634 1.257 L 1.358 23.457 C 1.358 23.857 1.639 24.357 2.107 24.357 L 6.975 24.357 L 8.286 16.057 L 9.504 7.157 Z"/></svg>);
    

    return (
        <Modal open={showDonate} onClick={() => setShowDonate(false)}>
            <Row className="edit-modal">
                <Col xs={6} className="modal-background-paypal center" onClick={(e) => e.stopPropagation()}>
                {isPending ? <Spinner /> : (
                    <>    
                    <Row>                  
                        <Col>
                            <h2 className="donate-title">Donate</h2>
                        </Col>
                        <Col>
                            <Button size="small" color="error" variant="contained" id="paypal-exit-button" onClick={() => setShowDonate(false)}>
                                <i className="material-icons">close</i>
                            </Button>
                        </Col>
                    </Row>  
                    <Row>
                        <Col />
                        <Col xs={12} lg={10}>
                            <Row>
                                <Col xs={12} sm={6}>
                                    <TextField size={isMobile ? "small" : ""} autoComplete="off" fullWidth id="paypal-amount-input" min="0" label={t("Amount")} color="" type="number" value={amount} onChange={changeAmount} />
                                </Col>
                                <Col xs={12} sm={6}>
                                    <FormControl size={isMobile ? "small" : ""} fullWidth id="paypal-currency-selector">
                                        <InputLabel id={currency+"-paypal-currency-label"}>{paypalIcon}&nbsp;{t("Currency")}</InputLabel>
                                        <Select
                                            defaultValue=""
                                            id={currency+"-paypal-currency-label"}
                                            labelId={currency+"-paypal-currency-label"}
                                            label={t("Currency")}
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
                            </Row>
                        </Col>
                        <Col />
                        <Col className='horizontal-center'>
                            <PayPalButtons 
                                style={{ layout: "vertical", color: "silver" }}
                                createOrder={(data, actions) => onCreateOrder(data, actions)}
                                onApprove={(data, actions) => onApproveOrder(data, actions)}
                            />
                        </Col>
                    </Row>
                    </>
                )}
                </Col>
            </Row>
        </Modal>
    );
}

export default Donate;