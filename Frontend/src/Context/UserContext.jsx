
import React, { useEffect, useState } from 'react';
import {toast} from 'react-hot-toast';
import axios from 'axios';

export const UserContext = React.createContext();

const backendUrl = import.meta.env.VITE_BACKEND_URL;
axios.defaults.baseURL = backendUrl;
const UserContextProvider = (props) => {
const [authuser,setauthuser]=useState(null);
const [token,settoken]=useState(null);


const checkauth= async()=>{
    try {
         const response = await axios.get('/api/user/checkauth');
    console.log("Raw server response in checkauth is:", response);

    const data = response.data;

    console.log("entering the data.succes")
        if(data.success){
            
            setauthuser(data.user);
           console.log(authuser);
            settoken(data.token);
        }else{
             toast.error("Authentication failed")
        }
    } catch (error) {
       toast.error("Something went wrong");

    }
}
const login=async (state,credentials)=>{
    try {
         const res = await axios.post(`/api/user/${state}`, credentials);
    console.log("Raw server response:", res.data);

    const data = res.data; // assign data explicitly
        if(data.success){
            console.log(data);
            setauthuser(data.user);
            console.log("in the the login fucntion",authuser);
            settoken(data.token);
            axios.defaults.headers.common["Authorization"] = data.token;
            localStorage.setItem("token",data.token);
            toast.success(data.message);
        }else{
            toast.error(data.message);
        }
    } catch (error) {
       toast.error("Something went wrong");

    }
}

const logout=async()=>{
    localStorage.removeItem("token");
    setauthuser(null);
    settoken(null);
    axios.defaults.headers.common["Authorization"] = null;
    toast.success("Logged out successfully");
}

useEffect(()=>{
    if(token){
        axios.defaults.headers.common["Authorization"] = token;
        checkauth();
    }
},[token])

 useEffect(() => {
    if (authuser) {
      localStorage.setItem('authuser', JSON.stringify(authuser))
    } else {
      localStorage.removeItem('authuser')
    }
  }, [authuser])
const values = {
authuser,
token,  
login,
checkauth,
logout
}
    return(
        <UserContext.Provider value={values}>
            {props.children}
        </UserContext.Provider>

    )
}

export default UserContextProvider;