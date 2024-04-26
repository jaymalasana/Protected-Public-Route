// import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { userAuth } from "../Userauth/UseAuth";

function ProtectedRoutes() {
  const token = userAuth();
  
  return token ? <Outlet/> : <Navigate to='/login'/>
}

export default ProtectedRoutes;
