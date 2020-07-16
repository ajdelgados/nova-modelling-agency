import React from 'react';
import {Router, Route, Switch} from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import UserShow from './pages/UserShow';

import history from '../history';

const App = ()=>{
	return (
		<div className="container pt-3 px-5">
		<Router history={history}>
		 <div>
		  <Switch>
		  <Route path="/" exact component={Login}  />
		  <Route path="/register" exact component={Register}  />
		  <Route path="/dashboard" exact component={Dashboard}  />
		  <Route path="/dashboard/:id" exact component={UserShow}  />
		  </Switch>
		 </div>
		</Router>
		</div>
		)
}

export default App;