import React, { useEffect } from "react";
import { useState } from "react";
import "./login.css";
import LoginClient from "../../helpers/LoginClient";

function Login({ setLogin, setUserID, setNewUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleUsername = (e) => {
    setUsername(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const checkLogin = () => {
    LoginClient(username, password, accessLogin);
  };

  const accessLogin = () => {
    setLogin(true);
    setUserID(username);
  };

  const newUser = () => {
    setNewUser(true);
  };

  return (
    <div className="login-container">
      <h1 className="login-title">Todo_8x Sign In</h1>
      <div className="inputs">
        <input
          type="text"
          className="login-input"
          placeholder="Enter your username"
          onChange={handleUsername}
          value={username}
        />
        <input
          type="password"
          className="login-input"
          placeholder="Enter your password"
          onChange={handlePassword}
          value={password}
        />
        <button className="login-button" onClick={checkLogin}>
          Sign In
        </button>
        <button className="login-button" onClick={newUser}>
          Register
        </button>
      </div>
    </div>
  );
}

export default Login;
