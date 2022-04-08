import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getGamesByNames } from "../actions";

export default function SearchBar() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const handleInputChange = (e) => {
    e.preventDefault();
    setName(e.target.value);
    console.log(name);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getGamesByNames(name));
    setName("");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Name:"
        value={name}
        onChange={handleInputChange}
      />
      <button type="submit" onClick={handleSubmit}>
        Search
      </button>
    </div>
  );
}
