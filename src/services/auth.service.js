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

const updateUserProfile = (id, username, name, email, bio) => {
  return axios.put(API_URL + "update_profile", {
    id,
    username,
    name,
    email,
    bio,
  });
};

const updateUserSecurity = (id, oldPassword, newPassword) => {
  return axios.put(API_URL + "update_security", {
    id,
    oldPassword,
    newPassword,
  });
};

const deleteUser = (id) => {
  console.log(id);
  return axios.delete(API_URL + `delete_user/${id}`);
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
  updateUserProfile,
  updateUserSecurity,
  deleteUser,
  logout,
  getCurrentUser,
};
