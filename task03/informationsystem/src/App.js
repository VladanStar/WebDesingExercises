import React, { useState, useEffect } from "react";
import "./App.css";
import StudentList from "./components/StudentList";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import StudentForm from "./components/StudentForm";
import Header from "./components/Header";
import Login from "./components/Login";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loadingUser, setLoadingUser] = useState(true);

  useEffect(() => {
    fetch("/user").then((response) => {
      if (response.status !== 401) {
        setLoadingUser(false);
        setIsLoggedIn(true);
      } else {
        setLoadingUser(false);
      }
    });
  }, []);

  function onLogin() {
    setIsLoggedIn(true);
  }
  function onLogut() {
    setIsLoggedIn(false);
  }
  if (loadingUser) {
    return <div>Loading...</div>;
  }

  if (!isLoggedIn) {
    return (
      <div className="App">
        <Login onLogin={onLogin} />
      </div>
    );
  }

 

  return (
    <div className="App">
      <BrowserRouter>
        <Header onLogout={onLogut} />
        <Switch>
          <Route path="/" exact component={StudentList} />
          <Route path="/students/" exact component={StudentList} />
          <Route path="/students/new" exact component={StudentForm} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
