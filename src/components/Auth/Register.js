import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../../api/auth";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user"); // Default role to avoid empty value
  const history = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    try {
      setTimeout(() => {
      register(username, email, password, role); // Pass the role to the register function
      history("/login");
      },50)
      
    } catch (error) {
      console.error("Registration failed", error);
    }
  };

  const handleRoleChange = (e) => {
    setRole(e.target.value);
    console.log("Selected Role:", e.target.value); // Log the selected value
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <select value={role} onChange={handleRoleChange} required>
          <option value="user">User</option>
          <option value="manager">Manager</option>
          <option value="admin">Admin</option>
        </select>
        <button type="submit">Register</button>
      </form>
      <div>
        <p>Already have an account? Please <a href="/login">Login</a></p>
      </div>
    </div>
  );
}

export default Register;
