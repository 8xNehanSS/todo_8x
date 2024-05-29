import React from "react";
import { useState, useEffect } from "react";
import Login from "./components/Login/login";
import App from "./App";

function MainApp() {
  const [login, setLogin] = useState(false);
  const [userID, setUserID] = useState("");

  useEffect(() => {
    const user = localStorage.getItem("token");
    if (user) {
      setLogin(true);
      setUserID(userID);
    }
  }, []);

  return (
    <>
      {login ? (
        <App userID={userID} setLogin={setLogin} />
      ) : (
        <Login setLogin={setLogin} setUserID={setUserID} />
      )}
    </>
  );
}

export default MainApp;

const tasks = {
  admin: ["Create new user", "Delete user", "Update user", "Read user"],
  john: ["Drink water", "Call mom & dad", "Learn Java"],
  jane: [
    "Fix car",
    "Fill the oil",
    "Call work",
    "Buy groceries",
    "Cook dinner",
  ],
  alice: ["Buy milk", "Buy eggs", "Buy bread", "Buy butter"],
};

const users = {
  admin: "admin",
  john: "password123",
  jane: "securePassword",
  alice: "123456",
};
