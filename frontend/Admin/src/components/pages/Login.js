import React, {useState} from 'react';
import history from '../../history';
import { Link } from 'react-router-dom';

import '../../styles/login.css';
import { SignIn} from '../../services/dashboard';




const Login = (props)=>{
	const [state , setState] = useState({
        email : "",
        password : "",
        successMessage: null,
        fieldErrors: null
    })

    const handleChange = (e) => {
        const {id , value} = e.target   
        setState(prevState => ({
            ...prevState,
            [id] : value
        }))
    }

    const handleSubmitClick = (e) => {
        e.preventDefault();
        if(state.email.length && state.password.length ) {
            DetailsFromServer();
        } else {
           state.fieldErrors = "Enter Email and Password"
        }
    }

   const DetailsFromServer = () => {
		const payload={
                "email":state.email,
                "password":state.password,
            }
        SignIn(payload)
   		.then (res=>{
			if(res.status === 200){
				sessionStorage.setItem('api_token', res.data.api_token);
                setState(prevState => ({
                    ...prevState,
                    'successMessage' : res.data.message
                }))
               history.push('/dashboard')
            } else {
            	setState(prevState => ({
                    ...prevState,
                    'fieldErrors' : res.data.message
                }))
            }
   		})
   		.catch (err=>{
   			state.fieldErrors = "Email and Password Mismatch!"
   		})
   	}

	return(
			<div className="text-center main-div row">
				<div className="col-md-12 vh-95 bg-white rounded border border-light">
					<div className="logo">LOGIN</div>
						<div className="login-form-1">
							<form id="login-form" className="text-left">
								<div className="login-form-main-message"></div>
								<div className="main-login-form">
									<div className="login-group">
										<div className="form-group">
											<label htmlFor="email" className="sr-only">
											email
											</label>
											<input type="text" 
											className="form-control" id="email"
											 name="email"
											  placeholder="Email" 
											  value = {state.email}
											  onChange = {handleChange}
											 
											  />
										</div>
										<div className="form-group">
											<label htmlFor="password"
											 className="sr-only">Password
											 </label>
											<input type="password" 
											className="form-control" 
											id="password" 
											name="password" 
											placeholder="Password"
											value = {state.password}
											onChange = {handleChange}
											autoComplete="off"
											 />
										</div>
									</div>
									<button 
									type="submit"
									 className="login-button"
									  onClick={handleSubmitClick}
									 >
									<i className="fa fa-chevron-right"></i>
									</button>
								</div>
								<div className="alert alert-success mt-2" style={{display: state.successMessage ? 'block' : 'none' }} role="alert">
					                {state.successMessage}
					            </div>
					            <div className="alert alert-danger mt-2" style={{display: state.fieldErrors ? 'block' : 'none' }} role="alert">
					                {state.fieldErrors}
					            </div>
					            <div>
					            	<p>Don't have an account? <Link to="/register">Sign Up</Link></p>
					            </div>
							</form>
						</div>
					</div>
				</div>	
		)
}

export default Login;