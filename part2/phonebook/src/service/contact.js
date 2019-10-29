import axios from "axios";

const baseUrl = "http://localhost:3001/persons";

const getAllContacts = () => {
  return axios.get(baseUrl).then(personsInfo => personsInfo);
};

const createContact = newObject => {
  return axios.post(baseUrl, newObject).then(response => response.data);
};

const updateContact = (id, newObject) => {
  return axios
    .put(`${baseUrl}/${id}`, newObject)
    .then(response => response.data);
};

const deleteContact = (id, objectToDelete) => {
  return axios
    .delete(`${baseUrl}/${id}`, { data: objectToDelete })
    .then(response => response.data);
};

export { getAllContacts, createContact, updateContact, deleteContact };
