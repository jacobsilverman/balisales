import './Post.scss';
 
import { isMobile } from '../../../../Data/Constants';

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
    
    const url = displayUrl.split("(")[1].split(")")[0]

    return (
        // <div className={containerCls} style={{backgroundImage: displayUrl}} id={"post-"+item?.id} key={"post-"+item?.id}>
        //     <a className="link" onClick={handleSelectPost}>
        //         {item?.numberOfImages>1 && 
        //         <svg className="multi-pic-indicator" viewBox="0 0 24 24">
        //             <path fill="currentColor" d="M21 16V6H7V16H21M21 4C21.53 4 22.04 4.21 22.41 4.59C22.79 4.96 23 5.47 23 6V16C23 16.53 22.79 17.04 22.41 17.41C22.04 17.79 21.53 18 21 18H7C5.89 18 5 17.1 5 16V6C5 4.89 5.89 4 7 4H21M3 20H18V22H3C2.47 22 1.96 21.79 1.59 21.41C1.21 21.04 1 20.53 1 20V9H3V20Z" />
        //         </svg>}
        //     </a>
        // </div> 

        <a className={`${containerCls} link`} style={{margin: "auto", position:"relative"}} onClick={handleSelectPost} id={"post-"+item?.id} key={"post-"+item?.id} >
            
            <img src={url} className='image-size' />
            <div className='price-background'>${item?.price}</div>
            {item?.numberOfImages>1 && 
            <svg className="multi-pic-indicator" viewBox="0 0 24 24">
                <path fill="currentColor" d="M21 16V6H7V16H21M21 4C21.53 4 22.04 4.21 22.41 4.59C22.79 4.96 23 5.47 23 6V16C23 16.53 22.79 17.04 22.41 17.41C22.04 17.79 21.53 18 21 18H7C5.89 18 5 17.1 5 16V6C5 4.89 5.89 4 7 4H21M3 20H18V22H3C2.47 22 1.96 21.79 1.59 21.41C1.21 21.04 1 20.53 1 20V9H3V20Z" />
            </svg>}
        </a>
    );
}

export default Post;