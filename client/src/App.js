import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './pages/Dashboard';
import Navigation from './components/Navbar';
import Wrapper from './components/Wrapper';
import Footer from './components/Footer';
// import { NavLink as RRNavLink, Router } from 'react-router-dom';
import './App.css';
// import { render } from 'react-dom';

const App = (props) => {
  return (
    <Router>
      <div>
        <Navigation />
        <Wrapper>
          <Route exact path='/' component={Dashboard} />
          <Route exact path="/dashboard" component={Dashboard} />
          {/* <Route exact path="/discover" component={Discover} />
        <Route exact path="/search" component={Search} /> */}
        </Wrapper>
        <Footer />
      </div>
    </Router>
  )
}

export default App;