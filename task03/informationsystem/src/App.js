import React from 'react';
import './App.css';
import StudentList from './components/StudentList';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import StudentForm from './components/StudentForm';
import Header from './components/Header';

function App() {
  
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
