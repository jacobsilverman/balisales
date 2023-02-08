import { useState } from 'react';

import { Button, Col, Container, Row } from 'react-bootstrap';
// import BuildMocks from './Data/Mocks/BuildMocks.js'

import Posts from './Posts';
import './Body.scss';
import Filter from './Filter';
import MenuItem from '@mui/material/MenuItem';

import { useTranslation } from "react-i18next";

function Body({posts, showFilter, setShowFilter}) {
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(10000);
    const [brand, setBrand] = useState('All');
    const [type, setType] = useState('All');
    const [sort, setSort] = useState('All');
    const [time, setTime] = useState('New');
    const [blade, setBlade] = useState('All');
    const [status, setStatus] = useState('All');

    const {t} = useTranslation();
    // const [windowScroll, setWindowScroll] = useState(0); 

    // useEffect(() => {
    //     document.addEventListener('scroll', () => {
    //         setWindowScroll(window.pageYOffset > 99);
    //     });
    // }, [])

    const resetFilter = () => {
        setMin(0);
        setMax(10000);
        setBrand('All');
        setBlade('All');
        setType('All');
        setSort('All');
        setStatus('All');
        setTime('New');
    };

    const getOptions = (options, option) => {
        return options.map((name) => {
            return <MenuItem key={option+"-"+name} value={name}>{t(name)}</MenuItem>;
        });
    };

    // const topFix = (windowScroll) ? 'fixed-top filter-container' : 'filter-container';
    // const topMargin = (windowScroll && displayFilter) ? 'remove-padding post-margin' : 'remove-padding';
    // const openFilterButton = (
    //     <span className="filter-button-container">
    //         <Button className="filter-button" onClick={() => {setShowFilter(true)}}>
    //             <b>{t("Filter")}</b>
    //         </Button>
    //     </span>
    // );
    const filter = (
        <Col xs={12} className="filter-container">
            <Filter 
                getOptions={getOptions}
                brand={brand} setBrand={setBrand} 
                type={type} setMax={setMax} 
                min={min} setMin={setMin} 
                max={max} setType={setType} 
                setDisplayFilter={setShowFilter} 
                resetFilter={resetFilter}
                sort={sort} setSort={setSort} 
                time={time} setTime={setTime}
                blade={blade} setBlade={setBlade}
                status={status} setStatus={setStatus}
                t={t} />
        </Col>
    );

    return (
        <Container className='body-container'>
            <Row>
                {(showFilter && filter)}
                <Posts 
                    min={min} 
                    max={max} 
                    brand={brand} 
                    posts={posts}
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