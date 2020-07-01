import axios from "axios";

export default {
  // Saves a user to the database
  saveUser: function (UserData) {
    return axios.post("/api/user", UserData);
  },
  login: function (UserData) {
    return axios.post("/api/user/login", UserData);
  },
  getUser: function () {
    return axios.get("api/user/currentuser");
  },
  getPets: function () {
    return axios.get("/api/user/pets");
  },
  savePet: function (PetData){
    return axios.post("/api/user/pets", PetData);
  },
  savePetFood: function (PetFoodData){
    return axios.post("/api/user/petfood", PetFoodData);
  },
};
