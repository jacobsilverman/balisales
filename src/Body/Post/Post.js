import React from 'react';

import './Post.css';

function Post({title, price, username, condition}) {
    return (
        <div className='post-container'>
            <div>
                title: {title}
            </div>
            <div>
                price: {price}
            </div>
            <div>
                username: {username}
            </div>
            <div>
                condition: {condition}
            </div>
        </div>
    );
}

export default Post;