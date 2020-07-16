import http from './http';


export const SignIn = async payload =>{
		try{
   			return await http.post('/signin', payload);
   		} catch (err){
   			throw err;
  		}
}

export const SignUp = async payload =>{
		try{
   			return await http.post('/user', payload, {
   				headers: {
					'x-access-token': sessionStorage.getItem('api_token')
			  	}
   			});
   		} catch (err){
   			throw err;
  		}
}

export const FindUsers = async () =>{
	try{
		   return await http.get('/users', {
				headers: {
					'x-access-token': sessionStorage.getItem('api_token')
			  	}
		   });
	   } catch (err){
		   throw err;
	  }
}

export const FindUser = async (id) =>{
	try{
		   return await http.get('/user/' + id, {
				headers: {
					'x-access-token': sessionStorage.getItem('api_token')
			  	}
		   });
	   } catch (err){
		   throw err;
	  }
}





