import './Post.scss';
 
import { dateFormatter, isMobile, stringToColour } from '../../../../Data/Constants';
import {  useRef, useState } from 'react';

function Post({displayUrl, item, index, settingsPage, setOpenEditModal, setSelectedPost, setOpenSelectModal=()=>{}}) {
    // const containerCls = `post-container ${!isMobile && "desktop-hov" } ${item?.type}-border`;
    let imgRef = useRef(null);
    const [imgCls, setImgCls] = useState("hide");
    const [imgContainerCls, setImgContainerCls] = useState("default-image-container");
    const url = displayUrl.split("(")[1].split(")")[0]

    const rotateVerticalImage = () =>{
        setImgCls("image-size")
        if (imgRef?.current?.naturalHeight > imgRef?.current?.naturalWidth) {
            setImgCls(cur => cur + " rotate-image")
            setImgContainerCls("rotate-image-container")
        }
        setImgCls(cur => cur + " show")
    }

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
        //works
        // <div className={`${containerCls} link`} style={{margin: "auto", position:"relative"}} onClick={handleSelectPost} id={"post-"+item?.id} key={"post-"+item?.id} >

        //     <img src={url} className='image-size' />
        //     <div className='price-background'>${item?.price}</div>
        //     {item?.numberOfImages>1 && 
        //     <svg className="multi-pic-indicator" viewBox="0 0 24 24">
        //         <path fill="currentColor" d="M21 16V6H7V16H21M21 4C21.53 4 22.04 4.21 22.41 4.59C22.79 4.96 23 5.47 23 6V16C23 16.53 22.79 17.04 22.41 17.41C22.04 17.79 21.53 18 21 18H7C5.89 18 5 17.1 5 16V6C5 4.89 5.89 4 7 4H21M3 20H18V22H3C2.47 22 1.96 21.79 1.59 21.41C1.21 21.04 1 20.53 1 20V9H3V20Z" />
        //     </svg>}
        // </div>

        <div className={`new-post-container ${!isMobile && "desktop-hov"}`} id={"post-"+item?.id} key={"post-"+item?.id} onClick={handleSelectPost}>
            <div className='new-post-inner-container'>
                <div>
                    <a className='author-text' style={{color: stringToColour(item?.author?.name)}} href={"/profile?id="+item?.author?.id}>{item?.author?.name}</a>
                    <span className='date-text'>Posted: {dateFormatter(item?.timeStamp)} ago</span>
                </div>
                <div className='post-title'>
                    {item?.title.toUpperCase()}
                </div>
                <div className={imgContainerCls}>
                    <img src={url} className={imgCls} ref={imgRef} onLoad={rotateVerticalImage} />
                </div>
                <div>
                    <span className='tag-box'>{item?.brand}</span>
                    <span className='tag-box'>{item?.type}</span>
                    <span className='tag-box'>{item?.status}</span>
                </div>
                {item?.numberOfImages > 1 && 
                <svg className="multi-pic-indicator" viewBox="0 0 24 24">
                    <path fill="black" d="M21 16V6H7V16H21M21 4C21.53 4 22.04 4.21 22.41 4.59C22.79 4.96 23 5.47 23 6V16C23 16.53 22.79 17.04 22.41 17.41C22.04 17.79 21.53 18 21 18H7C5.89 18 5 17.1 5 16V6C5 4.89 5.89 4 7 4H21M3 20H18V22H3C2.47 22 1.96 21.79 1.59 21.41C1.21 21.04 1 20.53 1 20V9H3V20Z" />
                </svg>}
            </div>
        </div>
    );
}

export default Post;