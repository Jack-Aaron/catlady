import axios from "axios";

export default {
  // Saves a user to the database
  saveUser: function (UserData) {
    return axios.post("/api/user", UserData);
  },

  getPets: function () {
    return axios.get("/api/user/pets");
  },
  login: function (UserData) {
    return axios.post("/api/user/login", UserData);
  },
  getUser: function () {
    return axios.get("api/user/currentuser");
  },
};
