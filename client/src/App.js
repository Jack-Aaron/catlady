import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './pages/Dashboard';
import Navigation from './components/Navbar';
import Wrapper from './components/Wrapper';
import NewPet from './components/newPet/newPet';
import SignUp from "./pages/SignUp/SignUp";
// import { NavLink as RRNavLink, Router } from 'react-router-dom';
import './App.css';
import { FinalCalculation } from './components/finalCalculation/FinalCalculation';

const App = (props) => {
  return (
    <Router>
      <div>
        <Navigation />
        <Wrapper>
          <Route exact path='/' component={SignUp} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/newPet" component={NewPet} />
          {/* <Route exact path="/discover" component={Discover} />
        <Route exact path="/search" component={Search} /> */}
        </Wrapper>
      </div>
    </Router>
  )
}

export default App;