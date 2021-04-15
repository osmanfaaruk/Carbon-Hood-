import './App.css';
import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import Login from './Components/Login/Login';
import Error from './Components/Error/Error';
import MainDashboard from './Components/Dashboard/ManiDashboard/MainDashboard';


export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
      <Switch>
        <Route path='/dashboard'>
          <MainDashboard/>
        </Route>
      <Route path="/login">
              <Login/>
          </Route>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="*">
          <Error/>
        </Route>
      </Switch>
    </Router>
  </UserContext.Provider>
  );
}

export default App;
