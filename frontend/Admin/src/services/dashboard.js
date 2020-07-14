import http from './http';


export const SignIn = async payload =>{
		try{
   			return await http.post('/signin', payload);
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

export const SendDetailsToServer = async payload =>{
		try{
   			return await http.post('/signin', payload);
   		} catch (err){
   			throw err;
  		}
}