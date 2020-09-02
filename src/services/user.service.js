import axios from "axios";

const API_URL = "http://localhost:8080/users/";

const getUserDetails = async (id) => {
    return axios.get(API_URL + `${id}/details`);
};

const getUserUniverseList = (id) => {
    return axios.get(API_URL + `${id}/universes`);
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
    getUserUniverseList,
    updateUserProfile,
};
