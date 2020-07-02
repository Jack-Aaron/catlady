import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Redirect, useHistory} from "react-router-dom";
import Navigation from './components/Navbar';
import Wrapper from './components/Wrapper';
import NewPet from './components/newPet/newPet';
import SignUp from "./pages/SignUp/SignUp";
import Login from "./pages/Login/Login";
import Dashboard from './pages/Dashboard';
import PetFoodForm from './pages/PetFoodForm/PetFoodForm';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// import { FinalCalculation } from './components/finalCalculation/FinalCalculation';



const App = (props) => {
  const history = useHistory();

  const [userData, setUserData] = useState({
    username: "",
    id: "",
  })


  return (
    <Router>
      <div>
        <Navigation />
        <Wrapper>
     
          <Route exact path="/login" render={(props) => (
            userData.username !== "" ? <Redirect to='/' /> :
              <Login setUserData={setUserData} />
          )}
          />

          <Route exact path="/signup" render={(props) => (
            userData.username !== "" ? <Redirect to='/' /> :
              <SignUp setUserData={setUserData} />
          )}
          />

          <Route exact path="/" render={(props) => (
            userData.username === "" ? <Redirect to='/login' /> :
              <Dashboard setUserData={setUserData} />
          )}
          />

          <Route exact path="/newPet" render={(props) => (
            userData.username === "" ? <Redirect to='/login' /> :
              <NewPet setUserData={setUserData} />
          )}
          />

          <Route exact path="/petfood" render={(props) => (
            userData.username === "" ? <Redirect to='/login' /> :
              <PetFoodForm setUserData={setUserData} />
          )}
          />

        </Wrapper>
        <Footer />
      </div>
    </Router>
  )

}

export default App;
