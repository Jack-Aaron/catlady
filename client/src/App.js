import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navbar';
import Wrapper from './components/Wrapper';
// import { NavLink as RRNavLink, Router } from 'react-router-dom';
import './App.css';
import { FinalCalculation } from './components/FinalCalculation';

const App = (props) => {
  return (
    <Router>
      <div>
        <Navigation />
        <Wrapper>
          <Route exact path="/"
          // component={}
          />
          <FinalCalculation></FinalCalculation>
          <Route exact path="/mypets"
          // component={}
          />
          {/* <Route exact path="/discover" component={Discover} />
        <Route exact path="/search" component={Search} /> */}
        </Wrapper>
      </div>
    </Router>
  )
}

export default App;