import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Auth/Auth';
import Register from './components/Auth/Register';
import UserDashboard from './pages/UserDashBoard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/" element={<Register/>} />
        <Route path="/dashboard" element={<UserDashboard/>} />
      </Routes>
    </Router>
  );
}

export default App;
