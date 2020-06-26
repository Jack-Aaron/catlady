import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
// import { NavLink as RRNavLink, Router } from 'react-router-dom';
import Navigation from './components/Navbar';
import Wrapper from './components/Wrapper';
<<<<<<< HEAD
import SignUp from "./pages/SignUp/SignUp";
import Dashboard from './pages/Dashboard';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
=======
import Footer from './components/Footer';
// import { NavLink as RRNavLink, Router } from 'react-router-dom';
>>>>>>> 9d255c8429974533c3611f8600dbef336a125f08
import './App.css';
import { FinalCalculation } from './components/FinalCalculation';

const App = (props) => {
  return (
    <Router>
      <div>
        <Navigation />
        <Wrapper>
          <Route exact path='/' component={SignUp} />
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