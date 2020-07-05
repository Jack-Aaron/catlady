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
import FoodTable from "./pages/FoodTable/FoodTable";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import PetInfoForm from "./components/petInfoForm/petInfoForm";
import { FinalCalculation } from "./components/finalCalculation/FinalCalculation";

const App = (props) => {
  const history = useHistory();
  //For food form and pet form
  const initalForm = {};

  const [form, setForm] = useState(initalForm);

  // get info on signed in user
  const [userData, setUserData] = useState({
    username: "",
    id: "",
  });

  // state of selected pet from dashboard
  const [currentPet, setCurrentPet] = useState({})


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
                  <SignUp
                    setUserData={setUserData}
                  />
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
                  <Dashboard
                    userData={userData}
                    setCurrentPet={setCurrentPet}
                  />
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
                    form={form}
                    setForm={setForm}
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
            path="/petfoods"
            render={(props) =>
              userData.username === "" ? (
                <Redirect to="/login" />
              ) : (
                  <FoodTable/>
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
                    currentPet={currentPet}
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
