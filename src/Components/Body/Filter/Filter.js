import { Fragment } from 'react';

import { brands, viewCounts, sorts, types } from '../../../Data/Constants';

import { Col, Row } from 'react-bootstrap';
import Button from '@mui/material/Button';

import './Filter.scss';

function Filter({brand, setBrand, max, setMax, min, setMin, type, setType, setDisplayFilter, resetFilter, sort, setSort, viewCount, setViewCount}) {

    const getOptions = (options) => {
        return options.map((name, key) => {
            return <option key={key} value={name}>{name}</option>;
        });
    };

    return (
        <Fragment>
            <Row>
                <Col xs={5} className='align-left'>
                    <Button variant="outlined" color="error" size="small" onClick={() => {setDisplayFilter(false)}}>x</Button>
                </Col>
            </Row>
            <Row>
                <Col xs={12} className='filter-content'>
                    <Row  className='filter-item'>
                        <Col xs={3} md={1} className="right">
                            Min:
                        </Col>
                        <Col xs={3} md={2} className='margin-sm'>
                            <input className='price-input' onChange={(event) => {setMin(event.target.value)}} value={min} />
                        </Col>
                        <Col xs={3} md={1} className="right">
                            Max:
                        </Col>
                        <Col xs={3} md={2}>
                            <input className='price-input' onChange={(event) => {setMax(event.target.value )}} value={max} />
                        </Col>
                        <Col xs={3} md={1} className="right">
                            <label>Brand:</label>
                        </Col>
                        <Col xs={3} md={2}>
                            <select value={brand} className="select-width" onChange={(event) => setBrand(event.target.value)}>
                                <option value="default">default</option>
                                {getOptions(brands, brand)}
                            </select>
                        </Col>
                        <Col xs={3} md={1} className="right">
                            <label>Type:</label>
                        </Col>
                        <Col xs={3} md={2}>
                            <select value={type} className="select-width" onChange={(event) => setType(event.target.value)}>
                                <option value="default">default</option>
                                {getOptions(types, type)}
                            </select>
                        </Col>
                    </Row>
                    <Row className='filter-item'>
                        <Col xs={3} className="right">
                            <label>Sort:</label>
                        </Col>
                        <Col xs={3}>
                            <select value={sort} className="select-width" onChange={(event) => setSort(event.target.value)}>
                                <option value="default">default</option>
                                {getOptions(sorts, sort)}
                            </select>
                        </Col>
                        <Col xs={3} className="right">
                            <label>Show:</label>
                        </Col>
                        <Col xs={3}>
                            <select value={viewCount} className="select-width" onChange={(event) => setViewCount(event.target.value)} selected={viewCount}>
                                <option value="default">default</option>
                                {getOptions(viewCounts, viewCount)}
                            </select>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row className='filter-item'>
                        <Col xs={12}>
                            <Button className="reset-button" variant="outlined" onClick={() => {resetFilter()}}>reset</Button>
                        </Col>
                    </Row>
        </Fragment>
    );
}

export default Filter;