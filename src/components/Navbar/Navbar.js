import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<div className='navbar'>
			<div className='blog-title'>
				<p>I Blog. You Read.</p>
			</div>
			<ul>
				<li>
					<Link to='/'>Home</Link>
				</li>
				<li>
					<Link to='/posts'>All Posts</Link>
				</li>
			</ul>
		</div>
	);
};

export default Navbar;
