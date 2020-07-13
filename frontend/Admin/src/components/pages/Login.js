import React from 'react';

import '../../styles/login.css';

const Login = ()=>{
	return(
			<div className="text-center main-div row">
				<div className="col-md-12 bg-white rounded border border-light">
					<div className="logo">LOGIN</div>
						<div className="login-form-1">
							<form id="login-form" className="text-left">
								<div className="login-form-main-message"></div>
								<div className="main-login-form">
									<div className="login-group">
										<div className="form-group">
											<label for="lg_username" className="sr-only">Username</label>
											<input type="text" className="form-control" id="lg_username" name="lg_username" placeholder="Username" />
										</div>
										<div className="form-group">
											<label for="lg_password" className="sr-only">Password</label>
											<input type="password" className="form-control" id="lg_password" name="lg_password" placeholder="Password" />
										</div>
										<div className="form-group login-group-checkbox">
											<input type="checkbox" id="lg_remember" name="lg_remember" />
											<label for="lg_remember">Remember</label>
										</div>
									</div>
									<button type="submit" className="login-button"><i className="fa fa-chevron-right"></i></button>
								</div>
								<div className="etc-login-form">
									<p>Forgot your password? <a href="#!">click here</a></p>
									<p>New user? <a href="#!">create new account</a></p>
								</div>
							</form>
						</div>
					</div>
				</div>	
		)
}

export default Login;