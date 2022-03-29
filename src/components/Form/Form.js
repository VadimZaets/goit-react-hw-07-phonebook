import React, { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";

import operations from "../../redux/operations";

export default function Form() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const dispatch = useDispatch();
  const handleChange = (event) => {
    const { name, value } = event.currentTarget;

    switch (name) {
      case "name":
        setName(value);
        break;
      case "number":
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(operations.addContact({ name, number }));
    setName("");
    setNumber("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <lable>
        Name
        <input
          autoComplete="off"
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
        />
      </lable>
      <label>
        Number
        <input
          autoComplete="off"
          type="text"
          name="number"
          value={number}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
}

Form.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
};
