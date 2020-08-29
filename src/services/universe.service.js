import axios from "axios";

const API_URL = "http://localhost:8080/universes/";

const createUniverse = async (ownerId, name, desc) => {
  return axios.post(API_URL + `${ownerId}/create_universe`, {
    name,
    desc,
  });
};

const getWikiList = (universeId) => {
  return axios.get(API_URL + `${universeId}/universes`);
};

const getUniverse = (id) => {
  return axios.get(API_URL + `${id}`);
};

export default {
  createUniverse,
  getWikiList,
  getUniverse,
};
