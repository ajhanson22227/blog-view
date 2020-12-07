import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Comment from './Comment';
import './Post.css';

const Post = (props) => {
	const { _id, title, text, date, comments } = props.post;
	const commentList = useCommentList(_id);
	const history = useHistory();

	const loggedIn = props.user ? true : false;
	const admingLoggedIn =
		loggedIn && props.user.status === 'admin' ? true : false;

	const deletePost = async () => {
		await fetch(`http://localhost:3000/api/posts/${_id}/delete`, {
			method: 'delete',
			headers: {
				'Content-Type': 'application/json',
				'auth-token': props.user.token,
			},
		}).then(history.push('/'));
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		const comment = {
			text: event.target[0].value,
		};
		await fetch(`http://localhost:3000/api/comment/${_id}/create`, {
			method: 'post',
			body: JSON.stringify(comment),
			headers: {
				'Content-Type': 'application/json',
				'auth-token': props.user.token,
			},
		}).then(history.push('/'));
	};

	const commentInput = (
		<form onSubmit={handleSubmit}>
			<label>
				Msg:
				<input type='text'></input>
			</label>
			<input type='submit' value='post'></input>
		</form>
	);

	return (
		<div className='post'>
			<div className='post'>
				<div className='post-title'>{title}</div>
				<div className='post-text'>{text}</div>
				<div className='post-text'>{date}</div>
				<div className='post-text'>{comments} comments</div>
				{admingLoggedIn ? (
					<div onClick={deletePost}>Delete Post</div>
				) : null}
			</div>
			<div className='comment-container'>{commentList}</div>
			{loggedIn ? commentInput : null}
		</div>
	);
};

function useCommentList(postID) {
	const [comments, setComments] = useState(null);
	let commentList = [];

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
	for (let i in comments) {
		commentList.push(
			<Comment key={i} comment={comments[i]} num={i} />,
		);
	}
	return commentList;
}

export default Post;
