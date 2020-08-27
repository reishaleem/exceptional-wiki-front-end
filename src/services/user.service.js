import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/users/";

const getUserDetails = async (id) => {
  return axios.get(API_URL + `${id}/details`);
};

const updateUserProfile = (id, username, name, email, bio) => {
  return axios.put(API_URL + `${id}/update_profile`, {
    username,
    name,
    email,
    bio,
  });
};

export default {
  getUserDetails,
  updateUserProfile,
};
