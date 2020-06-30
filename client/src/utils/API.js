import axios from "axios";

export default {
   // Saves a user to the database
  saveUser: function(UserData) {
    return axios.post("/api/user", UserData);
  // },
  // savePet: function(PetData) {
  //   return axios.post("/api/pets", PetData);
  // },
  // getPets: function() {
  //   return axios.get("/api/pets");
  // }
};