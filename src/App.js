import React, { useEffect, useState } from 'react';
import Post from './components/Post';

const App = () => {
	const posts = usePosts();
	const postList = usePostList(posts);

	const handleClick = (e) => {
		// console.log(postList);
		//displayPosts();
	};

	return (
		<div className='container'>
			Helo Borld
			<div className='post-container'>{postList}</div>
			<button onClick={handleClick}>show</button>
		</div>
	);
};

function usePosts() {
	const [posts, setPosts] = useState(null);
	useEffect(() => {
		async function fetchPosts() {
			const response = await fetch(
				`http://localhost:3000/api/posts/published`,
			);
			const data = await response.json();
			setPosts(data);
		}
		fetchPosts();
	}, []);
	return posts;
}

function usePostList(posts) {
	const [postList, setPostList] = useState(null);

	useEffect(() => {
		let pArray = [];
		for (let i in posts) {
			pArray.push(<Post key={i} post={posts[i]} />);
		}
		setPostList(pArray);
	}, [posts]);
	return postList;
}

export default App;
