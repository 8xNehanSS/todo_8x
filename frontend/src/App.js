import React from "react";
import { useState, useEffect } from "react";
import Login from "./components/Login/login";
import App from "./ToDo8x";
import Auth from "./helpers/Auth";
import Loader from "./helpers/loader/Loader";
import Register from "./components/Register/register";

function MainApp() {
  const [login, setLogin] = useState(false);
  const [userID, setUserID] = useState("");
  const [loading, setLoading] = useState(true);
  const [newUser, setNewUser] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("token");
    if (!user) {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
      return;
    }
    function checkLogin() {
      Auth(user, accessLogin);
    }
    checkLogin();
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const accessLogin = (userID) => {
    setLogin(true);
    setUserID(userID);
  };

  function logout() {
    setLogin(false);
    setUserID("");
    localStorage.removeItem("token");
  }

  function Application() {
    if (login) {
      return <App userID={userID} setLogin={logout} />;
    } else if (!newUser) {
      return (
        <Login
          setLogin={setLogin}
          setUserID={setUserID}
          setNewUser={setNewUser}
        />
      );
    } else {
      return (
        <Register
          setLogin={setLogin}
          setUserID={setUserID}
          setNewUser={setNewUser}
        />
      );
    }
  }

  return <>{loading ? <Loader /> : <div>{Application()}</div>}</>;
}

export default MainApp;
