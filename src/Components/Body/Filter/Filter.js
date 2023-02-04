import { Fragment } from 'react';

import { blades, brands, times, sorts, statuses, types } from '../../../Data/Constants';

import { Col, Row } from 'react-bootstrap';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';

import './Filter.scss';

function Filter({getOptions, brand, setBrand, max, setMax, min, setMin, type, setType, setDisplayFilter, resetFilter, sort, setSort, time, setTime, blade, setBlade, status, setStatus}) {

    return (
        <Fragment>
            <Row className='filter-item'>
                <Col xs={3} className='filter-exit-button'>
                    <Button variant="contained" color="error" size="small" onClick={() => {setDisplayFilter(false)}}>x</Button>
                </Col>
                <Col xs={9}>
                    <Button className="reset-button" variant="contained" onClick={() => {resetFilter()}}>reset</Button>
                </Col> 
            </Row>
            <Row>
                <Col xs={12} className='filter-content'>
                    <Row className='filter-item'>
                        <Col xs={6} sm={6} md={3} className="dropdown">
                            <TextField fullWidth label="Min" color="" type="number" onChange={(event) => {setMin(event.target.value)}} value={min} />
                        </Col>
                        <Col xs={6} sm={6} md={3}>
                            <TextField fullWidth label="Max" color="" type="number" onChange={(event) => {setMax(event.target.value )}} value={max} />
                        </Col>
                        <Col xs={6} sm={6} md={3}  className="dropdown">
                            <FormControl fullWidth>
                                <InputLabel id="filter-sort-select-label">Cost</InputLabel>
                                <Select
                                    labelId="filter-sort-select-label"
                                    id="filter-sort-select"
                                    value={sort}
                                    label="Cost"
                                    onChange={(event) => setSort(event.target.value)}>
                                    <MenuItem value="all">all</MenuItem>
                                    {getOptions(sorts, "sort")}
                                </Select>
                            </FormControl>
                        </Col>
                        <Col xs={6} sm={6} md={3}>
                            <FormControl fullWidth>
                                <InputLabel id="filter-status-select-label">status</InputLabel>
                                <Select
                                    labelId="filter-status-select-label"
                                    id="filter-status-select"
                                    value={status}
                                    label="status"
                                    onChange={(event) => setStatus(event.target.value)}>
                                    <MenuItem value="all">all</MenuItem>
                                    {getOptions(statuses, "status")}
                                </Select>
                            </FormControl>
                        </Col>
                        <Col xs={6} sm={6} md={3} className="dropdown">
                            <FormControl fullWidth>
                                <InputLabel id="filter-brand-select-label">brand</InputLabel>
                                <Select
                                    labelId="filter-brand-select-label"
                                    id="filter-brand-select"
                                    value={brand}
                                    label="status"
                                    onChange={(event) => setBrand(event.target.value)}>
                                    <MenuItem value="all">all</MenuItem>
                                    {getOptions(brands, "brand")}
                                </Select>
                            </FormControl>
                        </Col>
                        <Col xs={6} sm={6} md={3}>
                            <FormControl fullWidth>
                                <InputLabel id="filter-type-select-label">type</InputLabel>
                                <Select
                                    labelId="filter-type-select-label"
                                    id="filter-type-select"
                                    value={type}
                                    label="type"
                                    onChange={(event) => setType(event.target.value)}>
                                    <MenuItem value="all">all</MenuItem>
                                    {getOptions(types, "type")}
                                </Select>
                            </FormControl>
                        </Col>
            
                        <Col xs={6} sm={6} md={3}>
                            <FormControl fullWidth>
                                <InputLabel id="filter-time-select-label">Time</InputLabel>
                                <Select
                                    labelId="filter-time-select-label"
                                    id="filter-time-select"
                                    value={time}
                                    label="Time"
                                    onChange={(event) => setTime(event.target.value)}>
                                    {getOptions(times, "time")}
                                </Select>
                            </FormControl>
                        </Col>
                        <Col xs={6} sm={6} md={3}>
                            <FormControl fullWidth>
                                <InputLabel id="filter-blade-select-label">Blade</InputLabel>
                                <Select
                                    labelId="filter-blade-select-label"
                                    id="filter-blade-select"
                                    value={blade}
                                    label="blade"
                                    onChange={(event) => setBlade(event.target.value)}>
                                    <MenuItem value="all">all</MenuItem>
                                    {getOptions(blades, "blade")}
                                </Select>
                            </FormControl>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Fragment>
    );
}

export default Filter;