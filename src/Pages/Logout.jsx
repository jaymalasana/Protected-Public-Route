// import React from 'react'
import { useNavigate } from 'react-router-dom';

function Logout() {

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login')
  }
  return (
    <div>
    <button onClick={handleLogout}>Log Out</button>
    </div>
  )
}

export default Logout