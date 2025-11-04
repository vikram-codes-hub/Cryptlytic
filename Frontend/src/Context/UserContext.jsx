
import React, { useState } from 'react';
import {toast} from 'react-hot-toast';
import axios from 'axios';

export const UserContext = React.createContext();

const backendUrl = import.meta.env.VITE_BACKEND_URL;
axios.defaults.baseURL = backendUrl;
const UserContextProvider = (props) => {
const {authuser,setauthuser}=useState(null);
const [token,settoken]=useState(null);


const checkauth= async()=>{
    try {
        const data=await axios.get('/api/user//checkauth')

        if(data.success){
            setauthuser(data.user);
            settoken(data.token);
        }else{
             toast.error("Authentication failed")
        }
    } catch (error) {
       toast.error("Something went wrong");

    }
}
const loginHandler=async (state,credentials)=>{
    try {
        const {data}=await axios.post(`/api/user/${state}`,credentials);
        if(data.success){
            setauthuser(data.user);
            settoken(data.token);
            axios.defaults.headers.common["token"] = data.token;
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
    axios.defaults.headers.common["token"] = null;
    toast.success("Logged out successfully");
}
const values = {
authuser,
token,
loginHandler,
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