import React, { useEffect, useState} from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigation from './components/Navbar';
import Wrapper from './components/Wrapper';
import NewPet from './components/newPet/newPet';
import SignUp from "./pages/SignUp/SignUp";
import Login from "./pages/Login/Login";
import Dashboard from './pages/Dashboard';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { FinalCalculation } from './components/finalCalculation/FinalCalculation';

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
          <Route exact path='/' render={(props) => (<Login setUserData = {setUserData}/>)} />
          <Route exact path='/signup' component={SignUp} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/newPet" component={NewPet} />
          <Route exact path='/signup' component={SignUp} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  )
}

export default App;
