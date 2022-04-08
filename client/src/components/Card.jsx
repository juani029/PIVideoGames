import React from "react";
import { Link } from "react-router-dom";
import style from "./styles/Card.module.css";

export default function Card({ name, image, genres, id }) {
  return (
    <div className={style.card}>
      <div>{name}</div>
      <img src={image} alt="img not found" width="200px" height="250px" />
      <div>
        <Link to={"videogame/" + id}> more details</Link>
      </div>
      <p>genres: </p>
      <hr />
      <div>
        {genres.map((gen) => (
          <p key={gen}>{gen}</p>
        ))}
      </div>
    </div>
  );
}
