import React, { useState } from 'react';

export const UserContext = React.createContext();



const UserContextProvider = (props) => {
const {authuser,setauthuser}=useState(null);

const values = {

}
    return(
        <UserContext.Provider value={values}>
            {props.children}
        </UserContext.Provider>

    )
}

export default UserContextProvider;