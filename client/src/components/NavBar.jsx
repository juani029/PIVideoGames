import React from "react";
import SearchBar from "./SearchBar";
import style from "./styles/NavBar.module.css";
import { Link } from "react-router-dom";
import logo from "./styles/img/logo.png";
import home from "./styles/img/home.png";
import videogame from "./styles/img/videogame.png";

export default function NavBar() {
  return (
    <header className={style.header}>
      <Link className={style.linklogo} to="/">
        <img src={logo} alt="img not found" />
        <h2>WOG APP</h2>
      </Link>
      <nav>
        <Link className={style.navlink} to="/home">
          <p>Home</p>
          <img src={home} alt="#" />
        </Link>
        <Link className={style.navlink} to="/created">
          <p>Crear Videogame</p>
          <img src={videogame} alt="#" />
        </Link>
        <SearchBar />
      </nav>
    </header>
  );
}
