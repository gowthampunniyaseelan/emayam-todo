import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "../Layout/NavBar.css"
function Navbar() {
  const history = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    history('/login');
  };

  return (
    <nav>
      <Link to="/dashboard">Dashboard</Link>
      <button onClick={handleLogout}>Logout</button>
    </nav>
  );
}

export default Navbar;
