import React, {useState} from 'react';
import './App.css';
import StudentList from './components/StudentList';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import StudentForm from './components/StudentForm';
import Header from './components/Header';
import Login from './components/Login';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loadingUser, setLoadingUser] =useState(true);

  function onLogin() {
    setIsLoggedIn(true)
  }
  function onLogut() {
    setIsLoggedIn(false);
  }




  if (!isLoggedIn) {
    return (
      <div className="App">
        <Login onLogin={onLogin}/>
      </div>
    )
  }


  
  return (
    <div className="App">
    
    <BrowserRouter>
    <Header />
    <Switch>
      <Route  path='/' exact component={StudentList}/>
      <Route  path='/students/' exact component={StudentList} />
      <Route path='/students/new' exact component={StudentForm}/>
    </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
