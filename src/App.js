import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import Homepage from './components/HomePage/Homepage';
import PostPage from './components/PostPage/Postpage';
import PostsPage from './components/PostsPage/PostsPage';
import Navbar from './components/Navbar/Navbar';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import NewPost from './components/NewPost/NewPost';

const App = () => {
	const [user, setUser] = useState(null);

	useEffect(() => {
		if (!user) {
			localStorage.removeItem('user');
		}
	}, [user]);

	return (
		<div>
			<Navbar user={user} setUser={setUser} />
			<Switch>
				<Route
					path='/'
					exact
					component={() => <Homepage user={user} />}
				/>
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
				<Route
					path='/user/login'
					exact
					component={() => <Login setUser={setUser} />}
				/>
				<Route
					path='/admin/post/create'
					exact
					component={() => <NewPost user={user} />}
				/>
			</Switch>
		</div>
	);
};

export default App;
