import http from './http';


export const SignIn = async payload =>{
		try{
   			return await http.post('/signin', payload);
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