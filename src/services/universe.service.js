import axios from "axios";

const API_URL = "http://localhost:8080/universes/";

const createUniverse = async (ownerId, name, description) => {
  return axios.post(API_URL + `${ownerId}/create_universe`, {
    name,
    description,
  });
};

export default {
  createUniverse,
};
