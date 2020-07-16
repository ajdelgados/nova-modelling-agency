import React from 'react';
import { Link } from 'react-router-dom';
import Logo from  '../assets/images/O.png'

import '../styles/Header.css';

const Header = () =>{
	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-light bg-light ">
				<div className="container-fluid">
		         <Link to="/" className="navbar-brand brand">
		         <span> <img src={ Logo } alt="logo" /> </span>       
		         Nova
		         </Link>

				  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				    <span className="navbar-toggler-icon"></span>
				  </button>

				  <div className="collapse navbar-collapse" id="navbarSupportedContent">
				    <ul className="navbar-nav mr-auto">
				      <li className="nav-item active">
				         <Link to="/" className="navbar-brand"></Link>
				      </li>
				 	</ul>
				 	<ul className="navbar-nav nav navbar-right">
				 		<li className="nav-link">
				      		<Link to="/" className="nav-link link">Logout</Link>
				      	</li>
				 	</ul>
				  </div>
				</div>
			</nav>
		</div>
		);
}

export default Header;