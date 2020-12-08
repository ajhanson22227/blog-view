import React from 'react';
import { useHistory } from 'react-router-dom';

const NewPost = ({ user }) => {
	let history = useHistory();
	const createPost = async (data) => {
		await fetch('http://localhost:3000/api/posts/create', {
			method: 'post',
			body: JSON.stringify(data),
			headers: {
				'Content-Type': 'application/json',
				'auth-token': user.token,
			},
		}).then(setTimeout(() => history.push('/'), 1000));
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		const post = {
			title: event.target[0].value,
			text: event.target[1].value,
			published: event.target[2].checked,
		};
		createPost(post);
	};

	return (
		<form onSubmit={handleSubmit}>
			<label>
				Title
				<input type='text' />
			</label>
			<label>
				Text
				<input type='text' />
			</label>
			<label>
				published?
				<input type='checkbox' />
			</label>
			<input type='submit' value='post' />
		</form>
	);
};

export default NewPost;
