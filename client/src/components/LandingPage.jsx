import React from "react";
import { Link } from "react-router-dom";
import style from "./styles/LandingPage.module.css";

export default function LandingPage() {
  return (
    <div className={style.div}>
      <div className={style.title}>
        <div className={style.h1}>
          <h1>WELCOME TO WORLD OF GAMES</h1>
          <h2>Created By Juan Ignacio Santillan</h2>
        </div>
        <Link to="/home">
          <button className={style.btn}>Start</button>
        </Link>
      </div>
    </div>
  );
}
