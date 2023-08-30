
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
	const [openSelectModal, setOpenSelectModal] = useState({show: false, item: null, index: 0});

	const [selectedPost, setSelectedPost] = useState({});

	const [loaded, setLoaded] = useState(false);
	const { t } = useTranslation();

	useEffect(() => {
        getUserPosts(user).then((result) => {
			result.sort((a, b) => {
				return b.timeStamp-a.timeStamp;
			});
			const filteredResults = result.filter((post) => {
				return post.author.id === user
			})

            setFilterPosts(filteredResults);
			setOpenSelectModal(cur => {return {...cur, posts: filteredResults}})
        }).catch(() => {
            console.error("cant get user posts");
        }).finally(() => {
			setLoaded(true);
		});
	}, []);

	const handlePrevPost = () => {
        setOpenSelectModal(cur => {
            let prevItem = cur.posts[cur.index-1] ?? cur.posts[cur.posts.length-1];
            let index = (typeof cur.posts[cur.index-1] !== "undefined") ? cur.index-1 : cur.posts.length-1;
            return {
                ...cur,
                item: prevItem,
                index: index,
                posts: filterPosts
            }
        });
    }

    const handleNextPost = () => {
        setOpenSelectModal(cur => {
            let nextItem = cur.posts[cur.index+1] ?? cur.posts[0];
            let index = (typeof cur.posts[cur.index+1] !== "undefined") ? cur.index+1 : 0;
            return {
                ...cur,
                index: index,
                item: nextItem,
                posts: filterPosts
            }
        });
    }
	
	const setAccountData = () => {
		if (filterPosts?.length === 0) {
			return (
				(!loaded) ? <Spinner /> : <h4 className="center">No Posts Available</h4>
			);
		} 

		return (
			<div className="grid-container-posts">
				{openSelectModal.show &&
                    <SelectModal 
						t={t} 
                        item={openSelectModal.item} 
						handlePrevPost={handlePrevPost}
						handleNextPost={handleNextPost}
                        openSelectModal={openSelectModal.show} 
                        setOpenSelectModal={setOpenSelectModal} />}
				{openEditModal &&
					<EditModal 
						item={selectedPost}
						setPosts={setFilterPosts}
						filterPosts={filterPosts}
						setFilterPosts={setFilterPosts}
						openEditModal={openEditModal} 
						setOpenEditModal={setOpenEditModal} />}
				{filterPosts?.map((item) => {
					const displayUrl =  `url(${item?.urls[0]})`;
					return <Post 
						displayUrl={displayUrl}
						item={item}
						key={item.id}
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