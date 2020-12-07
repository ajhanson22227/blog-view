import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = ({ username, setUser }) => {
	const logout = () => {
		setUser(null);
	};

	const signedOutNav = (
		<ul>
			<li>
				<Link to='/'>Home</Link>
			</li>
			<li>
				<Link to='/posts'>All Posts</Link>
			</li>
			<li>
				<Link to='/user/register'>Sign Up</Link>
			</li>
			<li>
				<Link to='/user/login'>Log In</Link>
			</li>
		</ul>
	);
	const loggedInNav = (
		<ul>
			{username ? (
				<li className='navbar-welcome'>{`Welcome ${username}`}</li>
			) : null}
			<li>
				<Link to='/'>Home</Link>
			</li>
			<li>
				<Link to='/posts'>All Posts</Link>
			</li>
			<li>
				<Link to='/' onClick={logout}>
					Log Out
				</Link>
			</li>
		</ul>
	);

	return (
		<div className='navbar'>
			<div className='blog-title'>
				<p>I Blog. You Read.</p>
			</div>
			{username === null ? signedOutNav : loggedInNav}
		</div>
	);
};

export default Navbar;
