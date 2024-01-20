import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../../authslice/userSlice";
import apiService from "../../api/apiService";
import "./LoginForm.css";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await apiService.post("/user/login", {
        email,
        password,
      });
      dispatch(setUser(response.data));
      console.log("User set:", response.data);
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  return (
    <body className="full-background-log">
    <div className="login-form-container">
      <h2 className="login-form-header">Login</h2>
      <label className="login-form-label">Email:</label>
      <input
        className="login-form-input"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label className="login-form-label">Password:</label>
      <input
        className="login-form-input"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
     <Link to="/loan-request">
  <button className="login-form-button" onClick={handleLogin}>
    Login
  </button>
</Link>

    </div>
    </body>
  );
};

export default LoginForm;
