import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
// import style from "./styles/LandingPage.module.css";

export default function LandingPage() {
  return (
    <LandingContainer>
      <h1>WELCOME TO WORLD OF GAMES</h1>
      <h2>Created By Juan Ignacio Santillan</h2>
      <Link to="/home">
        <button>Start</button>
      </Link>
    </LandingContainer>
  );
}

const LandingContainer = styled.div`
  /* TITLE CSS */
  position: fixed;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-attachment: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(https://images5.alphacoders.com/593/thumb-1920-593333.jpg);
  z-index: 2;
  flex-direction: column;
  letter-spacing: 2px;
  background-position: center center;

  @media (min-width: 768px) {
    width: 100%;
    height: 100%auto;
  }

  h1 {
    font-family: "Press Start 2P", cursive;
    font-weight: bold;
    line-height: 72px;
    font-size: 5.5rem;
    margin: 0 24px;
    background-color: #e4e4e1;
    background-image: linear-gradient(120deg, #f6c525 0%, #fda085 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
  }
  h2 {
    font-family: "Press Start 2P", cursive;
    line-height: 72px;
    font-size: 2rem;
    margin: 0 24px;
    background-color: #e4e4e1;
    background-image: linear-gradient(120deg, #f6c525 0%, #fda085 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
  }

  /* BUTTON CSS */
  button {
    width: 200px;
    font-size: 16px;
    font-weight: 600;
    color: #330867c5;
    cursor: pointer;
    margin: 20px;
    height: 55px;
    text-align: center;
    border: none;
    background-size: 300% 100%;
    border-radius: 50px;
    -o-transition: all 0.4s ease-in-out;
    -webkit-transition: all 0.4s ease-in-out;
    transition: all 0.4s ease-in-out;
    background-image: linear-gradient(
      to right,
      #f5ce62,
      #e43603,
      #fa7199,
      #e85a19
    );
    box-shadow: 0 4px 15px 0 rgba(229, 66, 10, 0.75);
    letter-spacing: 0.8px;
    font-family: "Press Start 2P", cursive;
  }
  button:focus {
    outline: none;
  }
  button:hover {
    background-position: 100% 0;
    -o-transition: all 0.4s ease-in-out;
    -webkit-transition: all 0.4s ease-in-out;
    transition: all 0.4s ease-in-out;
    letter-spacing: 3px;
  }
  button:active {
    box-shadow: #d6d6e7 0 3px 7px inset;
    transform: translateY(2px);
  }
`;
