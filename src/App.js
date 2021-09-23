import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Pages/Home/Home';
import Details from './Components/Details/Details';
import './App.css';
import Login from './Components/Login/Login';


function App() {
  
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path='/details'>
            <Details />
          </Route>
          <Route exact path="/">
            <Home title="search" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
