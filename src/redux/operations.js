import axios from "axios";
import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  removeContactError,
  removeContactSuccess,
  removeContactRequest,
  fetchContactError,
  fetchContactSuccess,
  fetchContactRequest,
} from "./actions";
axios.defaults.baseURL = "https://6242cdd3b6734894c156b21f.mockapi.io/api/v1/";

const fetchContact = () => (dispatch) => {
  dispatch(fetchContactRequest());
  axios
    .get("/items")
    .then(({ data }) => dispatch(fetchContactSuccess(data)))
    .catch((error) => dispatch(fetchContactError(error)));
};

const addContact = (newContact) => (dispatch) => {
  const item = {
    ...newContact,
  };
  dispatch(addContactRequest());
  axios
    .post("/items", item)
    .then(({ data }) => dispatch(addContactSuccess(data)))
    .catch((error) => dispatch(addContactError(error)));
};
const removeContact = (id) => (dispatch) => {
  dispatch(removeContactRequest());
  axios
    .delete(`/items/${id}`)
    .then(() => dispatch(removeContactSuccess(id)))
    .catch((error) => dispatch(removeContactError(error)));
};
export default {
  addContact,
  removeContact,
  fetchContact,
};
