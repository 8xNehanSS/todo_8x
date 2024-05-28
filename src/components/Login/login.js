import React from "react";
import { useState } from "react";
import "./login.css";

function Login({ setLogin, setUserID, db }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleUsername = (e) => {
    setUsername(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const checkLogin = () => {
    for (const key in db) {
      console.log(key);
      console.log(db[key]);
      if (key === username && db[key] === password) {
        accessLogin();
        return;
      }
    }
    alert("Invalid username or password");
  };

  const accessLogin = () => {
    setLogin(true);
    setUserID(username);
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
      </div>
    </div>
  );
}

export default Login;
