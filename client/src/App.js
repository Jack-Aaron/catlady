import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigation from './components/Navbar';
import Wrapper from './components/Wrapper';
import SignUp from "./pages/SignUp/SignUp";
import Dashboard from './pages/Dashboard';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = (props) => {
  return (
    <Router>
      <div>
        <Navigation />
        <Wrapper>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path='/signup' component={SignUp} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  )
}

export default App;
