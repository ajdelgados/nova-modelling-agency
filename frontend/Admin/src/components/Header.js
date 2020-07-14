import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { FindUsers } from '../services/dashboard';

import './Header.css';

const Header = () =>{

	const [users, setUsers] = useState()

	useEffect(() => {
		FindUsers().then (res=>{
			console.log(res)
			setUsers(res.data.data.users)
		})
	}, []);
	return (
		<div>
			<nav className="navbar navbar-expand-lg bg-light ">
				<div className="container-fluid">
		         <Link className="navbar-brand brand">Nova</Link>

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
				      		<Link to="/" className="nav-link link">Logout </Link>
				      	</li>
				 	</ul>
				  </div>
				</div>
			</nav>
		</div>
		);
}

export default Header;