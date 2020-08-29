import axios from "axios";

const API_URL = `http://localhost:8080/universes/`;

const createWiki = async (ownerId, universeId, name, body) => {
  return axios.post(API_URL + `${universeId}/wikis/` + "new", {
    ownerId,
    name,
    body,
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
  createWiki,
  getUniversesList,
  getUniverse,
};
