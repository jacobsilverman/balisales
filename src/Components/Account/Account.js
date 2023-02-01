
import { useEffect, useState } from 'react';

import Grid from '@mui/material/Grid';
import Spinner from '../../Data/Constants/Spinner.js';

import Post from '../Body/Posts/Post';
import './Account.scss';

import { getUserPosts } from '../../Data/Services/userInfo';

function Account({user}) {
	const [filterPosts, setFilterPosts] = useState([]);
	const [openEditModal, setOpenEditModal] = useState(false);
	useEffect(() => {
        getUserPosts(user).then((result) => {
			result.sort((a, b) => {
				return b.timeStamp - a.timeStamp;
			});
            setFilterPosts(result);
        }).catch(() => {
            console.error("cant get user posts");
        });
	}, []);
	
	const setAccountData = () => {
		if (filterPosts.length === 0) {
			return (
				<Spinner /> 
			);
		} 

		return (
            filterPosts.length > 0 && 
			<Grid container style={{padding:'0px'}} className="grid-container-posts">
				{filterPosts.map((item) => {
					const displayUrl =  `url(${item?.urls[0]})`;
					const queryParam = 'id='+item?.id;
					return <Post 
						displayUrl={displayUrl}
						item={item}
						key={item.id}
						queryParam={queryParam}
						accountView={true}
						filterPosts={filterPosts} setFilterPosts={setFilterPosts}
						openEditModal={openEditModal}
						setOpenEditModal={setOpenEditModal} />
						
				})}
			</Grid>
        );
    }

	return setAccountData();
}

export default Account;