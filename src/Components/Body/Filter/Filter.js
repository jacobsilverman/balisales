import { Fragment, useState } from 'react';

import { brands } from '../../../Data/Constants';

import { Button, Col, Row } from 'react-bootstrap';

import './Filter.css';

function Filter({setBrand, setMax, setMin, setType, setFilter, setSort}) {

    const allBrandOptions = brands.map((name, key) => {
        return <option key={key} value={name}>{name}</option>;
    });

    return (
        <Fragment>
            <Row className='filter-title'>
                <Col>
                    Filter
                </Col>
                <Col className='align-right'>
                    <Button onClick={() => {setFilter(false)}}>x</Button>
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
                    Max:
                </Col>
                <Col xs={8}>
                    <input className='price-input' onChange={(event) => {setMax(event.target.value || 100000000)}} />
                </Col>
            </Row>
            <Row className='filter-item'>
                <Col xs={4}>
                    <label>Brand:</label>
                </Col>
                <Col xs={8}>
                    <select className="select-width" onChange={(event) => setBrand(event.target.value)}>
                        <option value="select">default</option>
                        {allBrandOptions}
                    </select>
                </Col>
            </Row>
            <Row className='filter-item'>
                <Col xs={4}>
                    <label>Type:</label>
                </Col>
                <Col xs={8}>
                    <select className="select-width" onChange={(event) => setType(event.target.value)}>
                        <option value="select">default</option>
                        <option value="wts">wts</option>
                        <option value="wtb">wtb</option>
                        <option value="wtt">wtt</option>
                    </select>
                </Col>
            </Row>
            <Row className='filter-item'>
                <Col xs={4}>
                    <label>Sort:</label>
                </Col>
                <Col xs={8}>
                    <select className="select-width" onChange={(event) => setSort(event.target.value)}>
                        <option value="default">default</option>
                        <option value="min">low</option>
                        <option value="max">high</option>
                    </select>
                </Col>
            </Row>
        </Fragment>
    );
}

export default Filter;