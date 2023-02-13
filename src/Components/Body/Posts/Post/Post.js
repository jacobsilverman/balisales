import './Post.scss';

import { Link } from 'react-router-dom';
 
import { isMobile } from '../../../../Data/Constants';

function Post({displayUrl, item, queryParam, settingsPage, setOpenEditModal, setSelectedPost}) {
    const containerCls = `post-container ${!isMobile && "desktop-hov" }`;
    return (
        <div className={containerCls} style={{backgroundImage: displayUrl}} key={"post-"+item?.id}>
            <Link to={!settingsPage && {pathname: '/singlePost', search: queryParam}} 
                className="link" 
                onClick={settingsPage && ((e) => {e.preventDefault();setSelectedPost(item);setOpenEditModal(true);})}>
                {item?.numberOfImages>1 && 
                <svg style={{marginLeft: "auto", marginRight: ".5vw", width:"30px",height:"30px",color:"white"}} viewBox="0 0 24 24">
                    <path fill="currentColor" d="M21 16V6H7V16H21M21 4C21.53 4 22.04 4.21 22.41 4.59C22.79 4.96 23 5.47 23 6V16C23 16.53 22.79 17.04 22.41 17.41C22.04 17.79 21.53 18 21 18H7C5.89 18 5 17.1 5 16V6C5 4.89 5.89 4 7 4H21M3 20H18V22H3C2.47 22 1.96 21.79 1.59 21.41C1.21 21.04 1 20.53 1 20V9H3V20Z" />
                </svg>}
            </Link>
        </div> 
    );
}

export default Post;