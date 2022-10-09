import React from "react";
import SearchBar from "./SearchBar";
// import style from "./styles/NavBar.module.css";
import { Link } from "react-router-dom";
import logo from "./styles/img/logo 3.png";
import home from "./styles/img/home.png";
import videogame from "./styles/img/videogame.png";
import styled from "styled-components";
import BurguerButton from "./BurguerButton";

export default function NavBar() {
  return (
    <>
      <NavContainer>
        <Link class="link" to="/">
          <img src={logo} alt="img not found" />
          <h2>WOG APP</h2>
        </Link>
        <div class="linkContainer">
          <SearchBar />
          <Link class="link" to="/home">
            <p>Home</p>
            <img src={home} alt="#" />
          </Link>
          <Link class="link" to="/created">
            <p>Add Videogame</p>
            <img src={videogame} alt="#" />
          </Link>
        </div>
        <div>
          <BurguerButton />
        </div>
      </NavContainer>
    </>
  );
}

const NavContainer = styled.nav`
  /* NAV CSS */
  display: flex;
  justify-content: space-between;
  height: 10%;
  background-image: linear-gradient(to top, #537895 0%, #09203f 100%);
  align-items: center;
  padding: 0.4rem;

  @media (min-width: 768px) {
  }

  /* LINKS CSS*/
  .link {
    display: flex;
    margin: 0.5rem;
    padding-left: 1rem;
    height: 5rem;
    align-items: center;
    text-decoration: none;
    color: rgb(255, 136, 0);
    font-family: "Press Start 2P", cursive;
    img {
      height: 50px;
      margin-right: 1rem;
    }
  }

  .linkContainer {
    display: flex;
    justify-content: flex-end;
  }
`;
