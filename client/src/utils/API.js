import axios from "axios";

export default {
  // Saves a user to the database
  saveUser: function (UserData) {
    return axios.post("/api/user", UserData);
  },
  getPets: function () {
    return axios.get('/api/user/pets');
  }
};