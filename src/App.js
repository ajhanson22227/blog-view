import React, { useEffect, useState } from 'react';
import Post from './components/Post';

const App = () => {
	const [posts, setPosts] = useState(null);
	const [postList, setPostList] = useState(null);

	useEffect(() => {
		async function fetchPosts() {
			const response = await fetch(`http://localhost:3000/api/posts`);
			const data = await response.json();
			setPosts(data);
		}
		fetchPosts();
	}, []);

	function displayPosts() {
		let postArray = [];
		for (let i in posts) {
			postArray.push(<Post key={i} post={posts[i]} />);
		}
		setPostList(postArray);
	}

	const handleClick = (e) => {
		console.log(posts);
		displayPosts();
	};

	return (
		<div className='container'>
			Helo Borld
			<div className='post-container'>{postList}</div>
			<button onClick={handleClick}>show</button>
		</div>
	);
};

export default App;
