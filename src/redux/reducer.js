import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  removeContactError,
  removeContactSuccess,
  removeContactRequest,
  changeFilter,
  fetchContactError,
  fetchContactSuccess,
  fetchContactRequest,
} from "./actions.js";

const contacts = createReducer([], {
  [fetchContactSuccess]: (state, { payload }) => payload,
  [addContactSuccess]: (state, { payload }) => {
    if (
      state.find(
        (contact) => contact.name.toLowerCase() === payload.name.toLowerCase()
      )
    ) {
      alert(`${payload.name} is already in contacts.`);
      return;
    }
    return [...state, payload];
  },
  [removeContactSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});
const loading = createReducer(false, {
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,
  [removeContactRequest]: () => true,
  [removeContactSuccess]: () => false,
  [removeContactError]: () => false,
});
const filter = createReducer("", {
  [changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  contacts,
  filter,
  loading,
});
