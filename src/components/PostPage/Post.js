import React, { useEffect, useState } from 'react';
//import Comment from './Comment';
import './Post.css';

const Post = (props) => {
	const { _id, title, text, date, comments } = props.post;
	const commentList = useCommentList(_id);

	return (
		<div>
			<div className='post'>
				<div className='post-title'>{title}</div>
				<div className='post-text'>{text}</div>
				<div className='post-text'>{date}</div>
				<div className='post-text'>{comments} comments</div>
			</div>
			<div>{commentList}</div>
		</div>
	);
};

function useCommentList(postID) {
	const [comments, setComments] = useState(null);

	useEffect(() => {
		async function fetchComments() {
			const response = await fetch(
				`http://localhost:3000/api/comment/${postID}`,
			);
			const data = await response.json();
			setComments(data);
		}
		fetchComments();
	}, [postID]);
	console.log(comments);
}

export default Post;
