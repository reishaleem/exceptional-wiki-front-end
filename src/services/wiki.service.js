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

const getWiki = (universeId, id) => {
  return axios.get(API_URL + `${universeId}/wikis/` + `${id}`);
};

const updateWiki = (universeId, wikiId, name, body) => {
  return axios.put(API_URL + `${universeId}/wikis/` + `${wikiId}/update`, {
    name,
    body,
  });
};

export default {
  createWiki,
  getUniversesList,
  getWiki,
  updateWiki,
};
