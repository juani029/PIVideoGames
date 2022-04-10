import React from "react";
import { Link } from "react-router-dom";
import style from "./styles/Card.module.css";

export default function Card({ name, image, genres, id }) {
  return (
    <div className={style.card}>
      <div className={style.name}>{name}</div>
      <img src={image} alt="img not found" className={style.img} />
      <div className={style.link}>
        <Link to={"videogame/" + id}>
          <button className={style.btn}>more details</button>
        </Link>
      </div>
      <p className={style.p}>genres: </p>
      <hr className={style.hr} />
      <div className={style.gen}>
        {genres.map((gen) => (
          <p key={gen}>{gen}</p>
        ))}
      </div>
    </div>
  );
}
