import "./App.css";
import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home/Home";
import Login from "./Components/Login/Login";
import Error from "./Components/Error/Error";
import MainDashboard from "./Components/Dashboard/ManiDashboard/MainDashboard";
import Services from "./Components/Home/Services/Services";
// import Blog from "./Components/Home/Blog/Blog";
import Brands from "./Components/Home/Brands/Brands";
import AboutUs from "./Components/Home/AboutUs/AboutUs";
// import BlogCard from "./Components/Home/BlogCard/BlogCard";
// import VehicleTypes from "./Components/Home/VehicleTypes/VehicleTypes";
import CheckOut from "./Components/Checkout/CheckOut";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <PrivateRoute path="/dashboard">
            <MainDashboard />
          </PrivateRoute>
          <Route path="/services">
            <Services />
          </Route>
          <Route path="/blog">
            <Brands />
            <AboutUs />
          </Route>
          <PrivateRoute path="/checkout/:serviceId">
            <CheckOut/>
          </PrivateRoute>
          <Route path="/login">
            <Login />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
