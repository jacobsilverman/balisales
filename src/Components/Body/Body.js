import { useState } from 'react';

import { Col, Container, Row } from 'react-bootstrap';
// import BuildMocks from './Data/Mocks/BuildMocks.js'

import Posts from './Posts';
import './Body.scss';
import Filter from './Filter';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import SelectModal from './Posts/Post/SelectModal';

import { useTranslation } from "react-i18next";
import Spinner from '../../Data/Constants/Spinner';

function Body({posts, loadAllData, loadMoreData, loadingMoreData, showFilter, setShowFilter}) {
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(10000);
    const [brand, setBrand] = useState('All');
    const [type, setType] = useState('All');
    const [sort, setSort] = useState('All');
    const [condition, setCondition] = useState('All');
    const [blade, setBlade] = useState('All');
    const [status, setStatus] = useState('All');


    const [postsLength, setPostsLength] = useState(0);
    const [showMoreAllButtons, setShowMoreAllButtons] = useState(true);
    const [openSelectModal, setOpenSelectModal] = useState({show:false,item:null});

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
        setCondition('All');
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
    const moreButton = () =>{
        loadMoreData(posts.length, setShowMoreAllButtons);
        setPostsLength(posts.length);
    }

    const allButton = () => {
        loadAllData();
        setShowMoreAllButtons(false);
    }

    const postAmountSelectors = () => {
        if (loadingMoreData){
            return <Spinner />
        }
        if (!showMoreAllButtons || posts.length <=0) {
            return;
        }

        return (<Row>
            <Col xs={6} className="center">
                <Button onClick={moreButton}>{t("More")}</Button>
            </Col>
            <Col xs={6} className="center">
                <Button onClick={allButton}>{t("All")}</Button>
            </Col>
        </Row>);
    }

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
                condition={condition} setCondition={setCondition}
                blade={blade} setBlade={setBlade}
                status={status} setStatus={setStatus}
                t={t} />
        </Col>
    );

    return (
        <Container className='body-container'>
            <Row>
                {openSelectModal.show && 
                    <SelectModal t={t} 
                        item={openSelectModal.item} 
                        openSelectModal={openSelectModal.show} 
                        setOpenSelectModal={setOpenSelectModal} />}
                {(showFilter && filter)}
                <Posts 
                    min={min} 
                    max={max} 
                    brand={brand} 
                    condition={condition}
                    posts={posts}
                    type={type}
                    sort={sort}
                    blade={blade}
                    status={status}
                    setOpenSelectModal={setOpenSelectModal} />
                {postAmountSelectors()}
            </Row>
        </Container>
    )
}

export default Body;