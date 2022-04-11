import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getGamesByNames } from "../actions";
import buscar from "./styles/img/search 4.png";
import style from "./styles/SearchBar.module.css";

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
    <div className={style.search}>
      <input
        type="text"
        placeholder="Name Of Videogame"
        value={name}
        onChange={handleInputChange}
        className={style.input}
      />
      <button className={style.img} type="submit" onClick={handleSubmit}>
        <img src={buscar} alt="Image not found" />
      </button>
    </div>
  );
}
