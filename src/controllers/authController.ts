import axios from "axios";
import "dotenv/config";
const usuario = `${process.env.USERS}`  
const senha = `${process.env.PASSWORD}` 
const encodeAuth = `Basic ${Buffer.from(`${usuario}:${senha}`).toString('base64')}`  
const urlEndPoint = `${process.env.URL_ENDPOINT_TOKEN}`; 
export async function authenticate() {
    const authToken ={ 
      Authorization: encodeAuth
    }
    const createToken = await axios.post(urlEndPoint,null, {headers: authToken});
    const token = createToken.data.api_token
    console.log(token);
    
    return token;    
    
}