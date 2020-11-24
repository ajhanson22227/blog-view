import React from 'react';
import './Post.css';

const Post = (props) => {
	const { title, text, date, comments } = props.post;

	return (
		<div className='post'>
			<div className='post-title'>{title}</div>
			<div className='post-text'>{text}</div>
			<div className='post-text'>{date}</div>
			<div className='post-text'>{comments.length} comments</div>
		</div>
	);
};

export default Post;
