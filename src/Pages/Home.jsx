// import React from 'react'
import { Navigate, useNavigate } from "react-router-dom"
import Logout from "./Logout"

function Home() {
    const navigate = useNavigate();

    const goDash = () => {
        navigate("/dashboard");
    }
  return (
    <>
    <div>Home</div>
    <button onClick={goDash}>Go To Dashboard</button>
    
    <Logout />
    </>

  )
}

export default Home