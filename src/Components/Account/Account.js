
import React, { useEffect, useState } from 'react';

import Spinner from '../../Data/Constants/Spinner.js';

import Post from '../Body/Posts/Post';

import { getUserPosts } from '../../Data/Services/userInfo';
const EditModal  = React.lazy(() => import('../../Components/Body/Posts/Post/EditModal'));

function Account({user, settingsPage}) {
	const [filterPosts, setFilterPosts] = useState([]);
	const [openEditModal, setOpenEditModal] = useState(false);
	const [selectedPost, setSelectedPost] = useState({});

	useEffect(() => {
        getUserPosts(user).then((result) => {
            setFilterPosts(result);
        }).catch(() => {
            console.error("cant get user posts");
        });
	}, []);
	
	const setAccountData = () => {
		if (filterPosts?.length === 0) {
			return (
				<Spinner /> 
			);
		} 

		return (
			<div style={{padding:'20px'}} className="grid-container-posts">
				{settingsPage && <EditModal 
					item={selectedPost} 
					filterPosts={filterPosts}
					setFilterPosts={setFilterPosts}
					openEditModal={openEditModal} 
					setOpenEditModal={setOpenEditModal} />}
				{filterPosts?.map((item) => {
					const displayUrl =  `url(${item?.urls[0]})`;
					const queryParam = 'id='+item?.id;
					return <Post 
						displayUrl={displayUrl}
						item={item}
						key={item.id}
						queryParam={queryParam}
						settingsPage={settingsPage}
						openEditModal={openEditModal}
						setOpenEditModal={setOpenEditModal}
						selectedPost={selectedPost}
						setSelectedPost={setSelectedPost} />
						
				})}
			</div>
        );
    }

	return setAccountData();
}

export default Account;