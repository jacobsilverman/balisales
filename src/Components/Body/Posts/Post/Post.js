
// import { priceColors } from '../../../Data/Constants';

import './Post.scss';

import { Link } from 'react-router-dom';
 
import Grid from '@mui/material/Grid';

function Post({displayUrl, item, queryParam, viewCount, viewCountHeight, settingsPage, showViewCount = 3, setOpenEditModal, setSelectedPost}) {
    // const priceCls = `price-container hidden-text color-${useMemo(() => {return priceColors(item?.type)}, [item?.type])}`;

    return (
        <Grid item className="post-container"
            style={{backgroundImage: displayUrl, height: viewCountHeight+"vw"}} 
            key={"post-"+item?.id} 
            xs={showViewCount ? 4 : 12/viewCount}>
            <Link to={!settingsPage && {pathname: '/singlePost', search: queryParam}} 
                className="link" 
                onClick={settingsPage && ((e) => {e.preventDefault();setSelectedPost(item);setOpenEditModal(true);})}>
                {item?.numberOfImages>1 && 
                <svg style={{marginLeft: "auto", marginRight: "1vw", width:"5vw",height:"5vw",color:"white"}} viewBox="0 0 24 24">
                    <path fill="currentColor" d="M21 16V6H7V16H21M21 4C21.53 4 22.04 4.21 22.41 4.59C22.79 4.96 23 5.47 23 6V16C23 16.53 22.79 17.04 22.41 17.41C22.04 17.79 21.53 18 21 18H7C5.89 18 5 17.1 5 16V6C5 4.89 5.89 4 7 4H21M3 20H18V22H3C2.47 22 1.96 21.79 1.59 21.41C1.21 21.04 1 20.53 1 20V9H3V20Z" />
                </svg>}
            </Link>
        </Grid> 
    );
}

export default Post;