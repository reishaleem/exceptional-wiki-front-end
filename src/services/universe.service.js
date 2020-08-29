import axios from "axios";

const API_URL = "http://localhost:8080/universes/";

const createUniverse = async (ownerId, name, desc) => {
  return axios.post(API_URL + `${ownerId}/create_universe`, {
    name,
    desc,
  });
};

const getUniversesList = (ids) => {
  return axios.get(API_URL + "universe_list", {
    ids,
  });
};

const getUniverse = (id) => {
  return axios.get(API_URL + `${id}`);
};

export default {
  createUniverse,
  getUniversesList,
  getUniverse,
};
