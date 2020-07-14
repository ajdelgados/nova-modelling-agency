import React from 'react';
import {Router, Route, Switch} from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Header from './Header';

import history from '../history';

const App = ()=>{
	return (
		<div className="container pt-3">
		<Router history={history}>
		 <div>
		  <Header />
		  <Switch>
		  <Route path="/" exact component={Login}  />
		  <Route path="/dashboard" exact component={Dashboard}  />
		  </Switch>
		 </div>
		</Router>
		</div>
		)
}

export default App;