import { useState } from 'react';

import { Button, Col, Container, Row } from 'react-bootstrap';
// import BuildMocks from './Data/Mocks/BuildMocks.js'

import Posts from './Posts';
import './Body.scss';
import Filter from './Filter';
import MenuItem from '@mui/material/MenuItem';

function Body() {
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(10000);
    const [brand, setBrand] = useState('all');
    const [type, setType] = useState('all');
    const [displayFilter, setDisplayFilter] = useState(false); // whether the filter is open or not
    const [sort, setSort] = useState('all');
    const [time, setTime] = useState('new');
    const [blade, setBlade] = useState('all');
    const [status, setStatus] = useState('all');

    // const [windowScroll, setWindowScroll] = useState(0); 

    // useEffect(() => {
    //     document.addEventListener('scroll', () => {
    //         setWindowScroll(window.pageYOffset > 99);
    //     });
    // }, [])

    const resetFilter = () => {
        setMin(0);
        setMax(10000);
        setBrand('all');
        setBlade('all');
        setType('all');
        setSort('all');
        setStatus('all');
        setTime('new');
    };

    const getOptions = (options, option) => {
        return options.map((name) => {
            return <MenuItem key={option+"-"+name} value={name}>{name}</MenuItem>;
        });
    };

    // const topFix = (windowScroll) ? 'fixed-top filter-container' : 'filter-container';
    // const topMargin = (windowScroll && displayFilter) ? 'remove-padding post-margin' : 'remove-padding';
    const openFilterButton = (
        <span className="filter-button-container">
            <Button className="filter-button" onClick={() => {setDisplayFilter(true)}}>
                <b>FILTER</b>
            </Button>
        </span>
    );
    const filter = (
        <Col xs={12} className="filter-container">
            <Filter 
                getOptions={getOptions}
                brand={brand} setBrand={setBrand} 
                type={type} setMax={setMax} 
                min={min} setMin={setMin} 
                max={max} setType={setType} 
                setDisplayFilter={setDisplayFilter} 
                resetFilter={resetFilter}
                sort={sort} setSort={setSort} 
                time={time} setTime={setTime}
                blade={blade} setBlade={setBlade}
                status={status} setStatus={setStatus} />
        </Col>
    );

    return (
        <Container className='body-container'>
            <Row>
                {(displayFilter && filter) || openFilterButton}
                <Posts 
                    min={min} 
                    max={max} 
                    brand={brand} 
                    type={type}
                    sort={sort}
                    time={time}
                    blade={blade}
                    status={status} />
            </Row>
        </Container>
    )
}

export default Body;