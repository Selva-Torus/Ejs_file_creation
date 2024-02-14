"use server"
import axios from "axios";


export const makeApiRequest = async() => {
    var apiUrl = `admin` === 'admin' ? `https://jsonplaceholder.typicode.com/users` : `https://jsonplaceholder.typicode.com/posts`;
   try{
       const response = await axios.get(apiUrl);
       return response.data;
   }catch(error){
       console.log(error);
       return 'Error occured during API call'
   }

  }
 