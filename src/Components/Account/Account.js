
import React, { useEffect, useState } from 'react';

import Spinner from '../../Data/Constants/Spinner.js';

import Post from '../Body/Posts/Post';

import { getUserPosts } from '../../Data/Services/userInfo';
import { useTranslation } from 'react-i18next';

const EditModal  = React.lazy(() => import('../../Components/Body/Posts/Post/EditModal'));
const SelectModal  = React.lazy(() => import('../../Components/Body/Posts/Post/SelectModal'));

function Account({user, settingsPage}) {
	const [filterPosts, setFilterPosts] = useState([]);
	const [openEditModal, setOpenEditModal] = useState(false);
	const [openSelectModal, setOpenSelectModal] = useState({show: false, item: null});

	const [selectedPost, setSelectedPost] = useState({});

	const [loaded, setLoaded] = useState(false);
	const { t } = useTranslation();

	useEffect(() => {
        getUserPosts(user).then((result) => {
			result.sort((a, b) => {
				return b.timeStamp-a.timeStamp;
			});
            setFilterPosts(result);
        }).catch(() => {
            console.error("cant get user posts");
        }).finally(() => {
			setLoaded(true);
		});
	}, []);
	
	const setAccountData = () => {
		if (filterPosts?.length === 0) {
			return (
				(!loaded) ? <Spinner /> : <h4 className="center">No Posts Available</h4>
			);
		} 

		return (
			<div className="grid-container-posts">
				{openSelectModal.show && 
                    <SelectModal t={t} 
                        item={openSelectModal.item} 
                        openSelectModal={openSelectModal.show} 
                        setOpenSelectModal={setOpenSelectModal} />}
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
						openSelectModal={openSelectModal}
						setOpenSelectModal={setOpenSelectModal}
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