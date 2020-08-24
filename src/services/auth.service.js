import axios from "axios";

const API_URL = "http://localhost:8080/api/users/";

const register = (username, email, name, password, bio) => {
  return axios.post(API_URL + "register", {
    username,
    email,
    name,
    password,
    bio,
  });
};

const login = async (username, password) => {
  const response = await axios.post(API_URL + "login", {
    username,
    password,
  });
  if (response.data.accessToken) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  console.log("logged in");
  return response.data;
};

const updateUserProfile = (username, name, email, bio) => {
  return axios.put(API_URL + "update", {
    username,
    name,
    email,
    bio,
  });
};

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

export default {
  register,
  login,
  logout,
  getCurrentUser,
};
