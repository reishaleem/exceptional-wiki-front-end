import axios from "axios";

const API_URL = "http://localhost:8080/users/";

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

const updateUserSecurity = (id, oldPassword, newPassword) => {
  return axios.put(API_URL + `${id}/update_security`, {
    oldPassword,
    newPassword,
  });
};

const deleteUser = (id) => {
  console.log(id);
  return axios.delete(API_URL + `${id}/delete_user`);
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
  updateUserSecurity,
  deleteUser,
  logout,
  getCurrentUser,
};
