import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const PostPage = (props) => {
	const { id } = useParams();
	const [isBusy, setIsBusy] = useState(true);
	const [post, setPost] = useState(null);

	useEffect(() => {
		async function fetchPost() {
			const response = await fetch(
				`http://localhost:3000/api/posts/${id}`,
			);
			const data = await response.json();
			setPost(data);
			setIsBusy(false);
		}
		fetchPost();
	}, [id]);

	return (
		<div>
			{isBusy ? (
				<p>Hold On Just A Second</p>
			) : (
				<div>
					<div>{post.title}</div>
					<div>{post.text}</div>
				</div>
			)}
		</div>
	);
};

export default PostPage;
