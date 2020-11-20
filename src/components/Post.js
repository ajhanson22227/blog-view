import React from 'react';
import './post.css';

const Post = (props) => {
	return (
		<div className='post'>
			<div className='post-title'>{props.post.title}</div>
			<div className='post-text'>{props.post.text}</div>
		</div>
	);
};

export default Post;
