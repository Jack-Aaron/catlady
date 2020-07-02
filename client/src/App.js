import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  useHistory,
} from "react-router-dom";
import API from "./utils/API";
import Navigation from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import NewPet from "./components/newPet/newPet";
import SignUp from "./pages/SignUp/SignUp";
import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard";
import PetFoodForm from "./pages/PetFoodForm/PetFoodForm";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import PetInfoForm from "./components/petInfoForm/petInfoForm";
import { FinalCalculation } from "./components/finalCalculation/FinalCalculation";
// import { FinalCalculation } from './components/finalCalculation/FinalCalculation';

const App = (props) => {
  const history = useHistory();

  const [userData, setUserData] = useState({
    username: "",
    id: "",
  });
  //For Pet Form
  const [petState, setPetState] = useState({
    petName: "",
    petType: "",
    currentWeight: 0,
    idealWeight: 0,
    userId: userData.id,
  });
  //For food form
  const initalForm = {
    name: "",
    calPer: "",
    ozPer: "",
    ing: "",
    nut: "",
  };

  const [form, setForm] = useState(initalForm);

  return (
    <Router>
      <div>
        <Navigation setUserData={setUserData} />
        <Wrapper>
          <Route
            exact
            path="/login"
            render={(props) =>
              userData.username !== "" ? (
                <Redirect to="/" />
              ) : (
                <Login setUserData={setUserData} />
              )
            }
          />

          <Route
            exact
            path="/signup"
            render={(props) =>
              userData.username !== "" ? (
                <Redirect to="/" />
              ) : (
                <SignUp setUserData={setUserData} />
              )
            }
          />

          <Route
            exact
            path="/"
            render={(props) =>
              userData.username === "" ? (
                <Redirect to="/login" />
              ) : (
                <Dashboard userData={userData} />
              )
            }
          />

          <Route
            exact
            path="/newPet"
            render={(props) =>
              userData.username === "" ? (
                <Redirect to="/login" />
              ) : (
                <PetInfoForm
                  petState={petState}
                  setPetState={setPetState}
                  userData= {userData}
                />
              )
            }
          />

          <Route
            exact
            path="/petfood"
            render={(props) =>
              userData.username === "" ? (
                <Redirect to="/login" />
              ) : (
                <PetFoodForm
                  form={form}
                  setForm={setForm}
                />
              )
            }
          />

          <Route
            exact
            path="/finalcalculation"
            render={(props) =>
              userData.username === "" ? (
                <Redirect to="/login" />
              ) : (
                <FinalCalculation
                  petState={petState}
                  form={form}
                />
              )
            }
          />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
