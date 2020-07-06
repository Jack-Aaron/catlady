import axios from "axios";

export default {
  // Saves a user to the database
  saveUser: function (UserData) {
    return axios.post("/api/user", UserData);
  },
  login: function (UserData) {
    return axios.post("/api/user/login", UserData);
  },
  logout: function () {
    return axios.get("/api/user/logout");
  },
  getUser: function () {
    return axios.get("api/user/currentuser");
  },
  getPets: function () {
    return axios.get("/api/user/pets");
  },
  getCurrentPet: function (petId) {
    return axios.get("/api/user/pets/"+ petId);
  },



  updateWeight: function (petId, weight) {
    console.log(petId)
    console.log(weight)
    return axios.patch("/api/user/pets/"+ petId, weight);
  },



  savePet: function (PetData){
    return axios.post("/api/user/pets", PetData);
  },
  savePetFood: function (PetFoodData){
    return axios.post("/api/user/petfood", PetFoodData);
  },
  getPetFood: function () {
    return axios.get("/api/user/petfood");
  },
  getCurrentFood: function (foodId) {
    return axios.get("/api/user/petfood/" + foodId);
  },
  deletePet: function (petId) {
    return axios.delete('/api/user/pets/' + petId);
  }
};
