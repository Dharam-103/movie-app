import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../Context/AuthContextProvider'
import { Navigate } from 'react-router-dom';

function PrivateRoute({children}) {
    const{status}=useContext(AuthContext);
    if(!status){
       return <Navigate to="/login" />
    }
    return children;
}

export default PrivateRoute;