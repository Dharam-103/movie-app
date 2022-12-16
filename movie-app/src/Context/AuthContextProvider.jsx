import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';
export const AuthContext=createContext();
function AuthContextProvider({children}) {
  const[userData,setUserData]=useState({});
  const[status,setStatus]=useState(false);
  console.log(userData,status);
  return (
    <div>
        <AuthContext.Provider value={{userData,setUserData,setStatus,status}}>{children}</AuthContext.Provider>
    </div>
  )
}

export default AuthContextProvider;