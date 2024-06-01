import React, { useEffect } from "react";
import { useState } from "react";
import "./register.css";
import RegisterClient from "../../helpers/RegisterClient";

function Register({ setLogin, setUserID, setNewUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleUsername = (e) => {
    setUsername(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const checkLogin = () => {
    if (username === "" || password === "") {
      alert("Please enter a valid username and password");
      return;
    }
    if (username.length < 4 || password.length < 4) {
      alert("Username and password must be at least 4 characters long");
      return;
    }
    if (username.length > 20 || password.length > 20) {
      alert("Username and password must be less than 20 characters long");
      return;
    }
    if (username.includes(" ") || password.includes(" ")) {
      alert("Username and password must not contain spaces");
      return;
    }
    if (username.includes("@") || username.includes(".")) {
      alert("Username must not contain '@' or '.'");
      return;
    }
    if (password.includes("password")) {
      alert("Password must not contain the word 'password'");
      return;
    }
    if (password.includes(username)) {
      alert("Password must not contain the username");
      return;
    }
    if (password.includes("1234")) {
      alert("Password must not contain '1234'");
      return;
    }
    RegisterClient(username, password, accessLogin);
  };

  const accessLogin = () => {
    setLogin(true);
    setUserID(username);
    newUser();
  };

  const newUser = () => {
    setNewUser(false);
  };

  return (
    <div className="login-container">
      <h1 className="login-title">Todo_8x Registration</h1>
      <div className="inputs">
        <input
          type="text"
          className="login-input"
          placeholder="Enter a username"
          onChange={handleUsername}
          value={username}
        />
        <input
          type="password"
          className="login-input"
          placeholder="Enter a password"
          onChange={handlePassword}
          value={password}
        />
        <button className="login-button" onClick={checkLogin}>
          Register
        </button>
        <button className="login-button" onClick={newUser}>
          Sign In
        </button>
      </div>
    </div>
  );
}

export default Register;
