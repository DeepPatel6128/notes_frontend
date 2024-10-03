import axios from "axios";

const baseURL = "/notes";

const getAll = () => {
  return axios.get(baseURL);
};

const create = (newObject) => {
  return axios.post(baseURL, newObject);
};

const update = (id) => {
  return axios.put(`${baseURL}/${id}`);
};

export default { getAll, create, update };
