import { Fragment } from 'react';

import { blades, brands, viewCounts, sorts, statuses, types } from '../../../Data/Constants';

import { Col, Row } from 'react-bootstrap';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';

import './Filter.scss';

function Filter({brand, setBrand, max, setMax, min, setMin, type, setType, setDisplayFilter, resetFilter, sort, setSort, viewCount, setViewCount, blade, setBlade, status, setStatus}) {

    const getOptions = (options) => {
        return options.map((name, key) => {
            return <MenuItem key={key} value={name}>{name}</MenuItem>;
        });
    };

    return (
        <Fragment>
            <Row className='filter-item'>
                <Col xs={2} className='align-left'>
                    <Button variant="contained" color="error" size="small" onClick={() => {setDisplayFilter(false)}}>x</Button>
                </Col>
                <Col xs={10}>
                    <Button className="reset-button" variant="contained" onClick={() => {resetFilter()}}>reset</Button>
                </Col> 
            </Row>
            <Row>
                <Col xs={12} className='filter-content'>
                    <Row className='filter-item'>
                        <Col xs={6} sm={6} md={3} className="dropdown">
                            <TextField label="Min" color="" onChange={(event) => {setMin(event.target.value)}} focused value={min} />
                        </Col>
                        <Col xs={6} sm={6} md={3}>
                            <TextField label="Max" color="" onChange={(event) => {setMax(event.target.value )}} focused value={max} />
                        </Col>
                        <Col xs={6} sm={6} md={3}  className="dropdown">
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Sort</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={sort}
                                    label="Sort"
                                    onChange={(event) => setSort(event.target.value)}>
                                    <MenuItem value="default">default</MenuItem>
                                    {getOptions(sorts, sort)}
                                </Select>
                            </FormControl>
                        </Col>
                        <Col xs={6} sm={6} md={3}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">status</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={status}
                                    label="status"
                                    onChange={(event) => setStatus(event.target.value)}>
                                    <MenuItem value="default">default</MenuItem>
                                    {getOptions(statuses, status)}
                                </Select>
                            </FormControl>
                        </Col>
                        <Col xs={6} sm={6} md={3} className="dropdown">
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">brand</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={brand}
                                    label="status"
                                    onChange={(event) => setBrand(event.target.value)}>
                                    <MenuItem value="default">default</MenuItem>
                                    {getOptions(brands, brand)}
                                </Select>
                            </FormControl>
                        </Col>
                        <Col xs={6} sm={6} md={3}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">type</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={type}
                                    label="type"
                                    onChange={(event) => setType(event.target.value)}>
                                    <MenuItem value="default">default</MenuItem>
                                    {getOptions(types, type)}
                                </Select>
                            </FormControl>
                        </Col>
            
                        <Col xs={6} sm={6} md={3}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Show</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={viewCount}
                                    label="Show"
                                    onChange={(event) => setViewCount(event.target.value)}>
                                    <MenuItem value="default">default</MenuItem>
                                    {getOptions(viewCounts, viewCount)}
                                </Select>
                            </FormControl>
                        </Col>
                        <Col xs={6} sm={6} md={3}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Blade</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={blade}
                                    label="blade"
                                    onChange={(event) => setBlade(event.target.value)}>
                                    <MenuItem value="default">default</MenuItem>
                                    {getOptions(blades, blade)}
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