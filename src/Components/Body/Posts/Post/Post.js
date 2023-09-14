import './Post.scss';
 
import { isMobile } from '../../../../Data/Constants';

import { Row, Col } from 'react-bootstrap';

import { Link } from 'react-router-dom';

function Post({displayUrl, item, index, settingsPage, setOpenEditModal, setSelectedPost, setOpenSelectModal=()=>{}}) {
    const containerCls = `post-container ${!isMobile && "desktop-hov" } ${item?.type}-border`;
    const handleSelectPost = (e) => {
        if (settingsPage) {
            e.preventDefault();
            setSelectedPost(item);
            setOpenEditModal(true);
        }else {
            setOpenSelectModal(cur => {return {...cur, show:true, index: index, item:item}})
        }
    }


    return (
        <div className={containerCls} style={{backgroundImage: displayUrl}} key={"post-"+item?.id}>
            <a className="link" 
                onClick={handleSelectPost}>
                {item?.numberOfImages>1 && 
                <svg className="multi-pic-indicator" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M21 16V6H7V16H21M21 4C21.53 4 22.04 4.21 22.41 4.59C22.79 4.96 23 5.47 23 6V16C23 16.53 22.79 17.04 22.41 17.41C22.04 17.79 21.53 18 21 18H7C5.89 18 5 17.1 5 16V6C5 4.89 5.89 4 7 4H21M3 20H18V22H3C2.47 22 1.96 21.79 1.59 21.41C1.21 21.04 1 20.53 1 20V9H3V20Z" />
                </svg>}
            </a>
        </div> 
    );

}

export function SinglePost({displayUrl, item, index, settingsPage, setOpenEditModal, setSelectedPost, t, setOpenSelectModal=()=>{}}) {
    const container1Cls = `post-container-1 ${!isMobile && "desktop-hov" } ${item?.type}-border`;
    const createdDate = new Date(item?.timeStamp).toLocaleDateString();
    const handleSelectPost = (e) => {
        if (settingsPage) {
            e.preventDefault();
            setSelectedPost(item);
            setOpenEditModal(true);
        }else {
            setOpenSelectModal(cur => {return {...cur, show:true, index: index, item:item}})
        }
    }

    return (
        <div className='outer-post-container-1'>
            <div className={container1Cls} style={{backgroundImage: displayUrl}} key={"post-"+item?.id} onClick={handleSelectPost}>
                <a className="link" >
                    {item?.numberOfImages>1 && 
                    <svg className="multi-pic-indicator" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M21 16V6H7V16H21M21 4C21.53 4 22.04 4.21 22.41 4.59C22.79 4.96 23 5.47 23 6V16C23 16.53 22.79 17.04 22.41 17.41C22.04 17.79 21.53 18 21 18H7C5.89 18 5 17.1 5 16V6C5 4.89 5.89 4 7 4H21M3 20H18V22H3C2.47 22 1.96 21.79 1.59 21.41C1.21 21.04 1 20.53 1 20V9H3V20Z" />
                    </svg>}
                </a>
            </div> 
            <div className='center'>
                <h3>{item?.title}</h3>
                <br />
                {item?.price}
                <br />
                {item?.type}
               
            </div>
            <div className="center" style={{display:"flex", alignItems:"center"}}>
                <Row >
                    <Col>
                        <Row className="profile-link">
                            <Col xs={3} sm={3} className='flex-end'>
                                <Link className="link" to={{pathname: '/profile', search: "id=" + item?.author?.id}}>
                                    {/* <div className="account-profile" style={{backgroundImage: `url(${profilePic})`}} /> */}
                                </Link>
                            </Col>
                            <Col xs={9} sm={9} className="vertical-center flex-start">
                                <Link to={{pathname: '/profile', search: "id=" + item?.author?.id}}>
                                    <div className="display-name">
                                        {item?.author?.name}
                                    </div>
                                    <div className="date-created">
                                        <b>{t("Date Created")}</b>: {createdDate}
                                    </div>
                                </Link>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default Post;