import React, { useEffect } from "react";
import { useState } from "react";
import "./login.css";

function Login({ setLogin, setUserID }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleUsername = (e) => {
    setUsername(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const checkLogin = async () => {
    try {
      // Make a fetch request to the server
      const response = await fetch("http://localhost:5000/todo8x/getuser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.status === 400) {
        alert("Invalid username or password");
      } else {
        const data = await response.json();
        localStorage.setItem("token", data.token);
        accessLogin();
      }
    } catch (error) {
      console.log(error);
    }
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
