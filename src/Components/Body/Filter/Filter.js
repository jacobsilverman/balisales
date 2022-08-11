import { Fragment } from 'react';

import { brands } from '../../../Data/Constants';

import { Col, Row } from 'react-bootstrap';

import './Filter.css';

function Filter({setBrand, setMax, setMin}) {

    const allBrandOptions = brands.map((name, key) => {
        return <option key={key} value={name}>{name}</option>;
    });

    return (
        <Fragment>
            <Row className='filter-title'>
                <Col>
                    Filter
                </Col>
            </Row>
            <Row  className='filter-item'>
                <Col xs={4}>
                    <div className=''>Min:</div>
                </Col>
                <Col xs={8}>
                    <input className='price-input' onChange={(event) => {setMin(event.target.value)}} />
                </Col>
            </Row>
            <Row  className='filter-item'>
                <Col xs={4}>
                    Mox:
                </Col>
                <Col xs={8}>
                    <input className='price-input' onChange={(event) => {setMax(event.target.value || 100000000)}} />
                </Col>
            </Row>
            <Row  className='filter-item'>
                <Col xs={12}>
                    <label>Brand:</label>
                    <select onChange={(event) => setBrand(event.target.value)}>
                        <option value="none">select</option>
                        {allBrandOptions}
                    </select>
                </Col>
            </Row>
        </Fragment>
    );
}

export default Filter;