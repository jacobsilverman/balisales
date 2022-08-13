import { Fragment } from 'react';

import { brands, viewCounts, sorts, types } from '../../../Data/Constants';

import { Button, Col, Row } from 'react-bootstrap';

import './Filter.css';

function Filter({brand, setBrand, max, setMax, min, setMin, type, setType, setFilter, resetFilter, sort, setSort, viewCount, setViewCount}) {

    const getOptions = (options, prevSelection) => {
        return options.map((name, key) => {
            return <option key={key} value={name} selected={name == prevSelection}>{name}</option>;
        });
    };

    return (
        <Fragment>
            <Row className='filter-title'>
                <Col  className='align-left'>
                    <Button onClick={() => {setFilter(false)}}>x</Button>
                </Col>
                <Col className='align-left'>
                    Filter
                </Col>

            </Row>
            <Row  className='filter-item'>
                <Col xs={12} md={4}>
                    <div className=''>Min:</div>
                </Col>
                <Col xs={12} md={8}>
                    <input className='price-input' onChange={(event) => {setMin(event.target.value)}} value={min} />
                </Col>
            </Row>
            <Row  className='filter-item'>
                <Col xs={12} md={4}>
                    Max:
                </Col>
                <Col xs={12} md={8}>
                    <input className='price-input' onChange={(event) => {setMax(event.target.value )}} value={max} />
                </Col>
            </Row>
            <Row className='filter-item'>
                <Col xs={12} md={4}>
                    <label>Brand:</label>
                </Col>
                <Col xs={12} md={8}>
                    <select className="select-width" onChange={(event) => setBrand(event.target.value)}>
                        <option value="default">default</option>
                        {getOptions(brands, brand)}
                    </select>
                </Col>
            </Row>
            <Row className='filter-item'>
                <Col xs={12} md={4}>
                    <label>Type:</label>
                </Col>
                <Col xs={12} md={8}>
                    <select className="select-width" onChange={(event) => setType(event.target.value)}>
                        <option value="default">default</option>
                        {getOptions(types, type)}
                    </select>
                </Col>
            </Row>
            <Row className='filter-item'>
                <Col xs={12} md={4}>
                    <label>Sort:</label>
                </Col>
                <Col xs={12} md={8}>
                    <select className="select-width" onChange={(event) => setSort(event.target.value)}>
                        <option value="default">default</option>
                        {getOptions(sorts, sort)}
                    </select>
                </Col>
            </Row>
            <Row className='filter-item'>
                <Col xs={12} md={4}>
                    <label>Show:</label>
                </Col>
                <Col xs={12} md={8}>
                    <select className="select-width" onChange={(event) => setViewCount(event.target.value)} selected={viewCount}>
                        <option value="default">default</option>
                        {getOptions(viewCounts, viewCount)}
                    </select>
                </Col>
            </Row>
            <Row className='filter-item'>
                <Col xs={12}>
                    <Button onClick={() => {resetFilter()}}>reset</Button>
                </Col>
            </Row>
        </Fragment>
    );
}

export default Filter;