import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import Homepage from './components/HomePage/Homepage';
import PostPage from './components/PostPage/Postpage';
import PostsPage from './components/PostsPage/PostsPage';
import Navbar from './components/Navbar/Navbar';
import Register from './components/Register/Register';

const App = () => {
	const [user, setUser] = useState(null);
	const [username, setUsername] = useState(null);

	useEffect(() => {
		if (user) {
			const currUser = JSON.parse(localStorage.getItem('user'));
			console.log(currUser);
			setUsername(currUser.username);
		} else {
			localStorage.removeItem('auth-token');
			localStorage.removeItem('user');
			setUsername(null);
		}
	}, [user]);

	return (
		<div>
			<Navbar username={username} setUser={setUser} />
			<Switch>
				<Route path='/' exact component={() => <Homepage />} />
				<Route
					path='/post/:id'
					exact
					component={() => <PostPage user={user} />}
				/>
				<Route path='/posts' exact component={() => <PostsPage />} />
				<Route
					path='/user/register'
					exact
					component={() => <Register setUser={setUser} />}
				/>
			</Switch>
		</div>
	);
};

export default App;
