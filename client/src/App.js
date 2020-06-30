import React, { useEffect, useState} from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigation from './components/Navbar';
import Wrapper from './components/Wrapper';
import SignUp from "./pages/SignUp/SignUp";
import Login from "./pages/Login/Login";
import Dashboard from './pages/Dashboard';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = (props) => {
  const [userData, setUserData] = useState({
    username: "",
    id: "",
  })

  return (
    <Router>
      <div>
        <Navigation />
        <Wrapper>
feature/login_signup
          <Route exact path='/' render={(props) => (<Login setUserData = {setUserData}/>)} />

          <Route exact path='/signup' component={SignUp} />
          <Route exact path="/dashboard" component={Dashboard} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  )
}

export default App;
