
import { auth } from '../../firebase-config';
import { Container, Col, Row } from 'react-bootstrap';

import Post from '../Body/Post';
import './Account.scss';

function Account({posts}) {
	const filterPosts = posts?.filter((ele) => {
		return ele.author.id === auth.currentUser?.uid;
	});

	return (
		<Container>
			<Row className="account-container center">
				<Col>
					{filterPosts.length > 0 ? filterPosts?.map((item) => { return <Post item={item} key={item.id} />}) : "no posts available"}
				</Col>
			</Row>
		</Container>
	);
	
}

export default Account;