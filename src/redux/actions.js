import { createAction } from "@reduxjs/toolkit";

export const fetchContactRequest = createAction("items/fetchContactRequest");
export const fetchContactSuccess = createAction("items/fetchContactSuccess");
export const fetchContactError = createAction("items/fetchContactError");

export const addContactRequest = createAction("items/addContactRequest");
export const addContactSuccess = createAction("items/addContactSuccess");
export const addContactError = createAction("items/addContactError");

export const removeContactRequest = createAction("items/removeContactRequest");
export const removeContactSuccess = createAction("items/removeContactSuccess");
export const removeContactError = createAction("items/removeContactError");

export const changeFilter = createAction("item/changeFilter");
