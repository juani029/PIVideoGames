import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getGames,
  filterByGenres,
  getGenres,
  filterByCreated,
  orderGames,
} from "../actions";
import Card from "./Card";
import Paginado from "./Paginado";
import style from "./styles/Home.module.css";
import myLoader from "./styles/img/loader.png";
import { Link } from "react-router-dom";

export default function Home() {
  const dispatch = useDispatch();
  const allVideogames = useSelector((state) => state.videoGames);
  const videogames = useSelector((state) => state.allVideogames);
  const allGenres = useSelector((state) => state.genres);

  const [currentPage, setCurrentPage] = useState(1);
  const videogamesPerPage = 15;

  const positionOfLastVideogame = currentPage * videogamesPerPage; //1*15=15
  const positionOfFirstVideogame = positionOfLastVideogame - videogamesPerPage; //15-15=0

  //Como el Slice divide el array desde el primer parametro hasta el segundo parámetro (sin incluirlo) nos vamos a traer los juegos de a 15.
  const currentVideogames = allVideogames.slice(
    positionOfFirstVideogame,
    positionOfLastVideogame
  );

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    dispatch(getGames());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getGenres());
  }, [dispatch]);

  // const handleClick = (e) => {
  //   e.preventDefault();
  //   dispatch(getGames());
  // };

  const handleFilterGenre = (e) => {
    e.preventDefault();
    dispatch(filterByGenres(e.target.value));
    setCurrentPage(1);
  };

  const handleFilterCreated = (e) => {
    e.preventDefault();
    dispatch(filterByCreated(e.target.value));
    setCurrentPage(1);
  };

  const handleSort = (e) => {
    e.preventDefault();
    dispatch(orderGames(e.target.value));
    setCurrentPage(1);
  };

  return (
    <div>
      {videogames.length > 0 ? (
        <div className={style.div}>
          <div>
            <div className={style.filters}>
              <div className={style.contFilter}>
                <p>Filter by Genre</p>
                <select onChange={handleFilterGenre} key="genre">
                  <option value="All">All</option>
                  {allGenres &&
                    allGenres.map((genre) => (
                      <option value={genre.name} key={genre.id}>
                        {genre.name}
                      </option>
                    ))}
                </select>
              </div>
              <div className={style.contFilter}>
                <p>Order by</p>
                <select onChange={handleSort} key="Alpha">
                  <option value="alpha">All</option>
                  <option value="a-z">A-Z</option>
                  <option value="z-a">Z-A</option>
                  <option value="top">Top Rating</option>
                  <option value="btt">Bottom Rating</option>
                </select>
              </div>
              <div className={style.contFilter}>
                <p>Filter by Created</p>
                <select onChange={handleFilterCreated} key="Created">
                  <option value="all">All</option>
                  <option value="created">Created</option>
                  <option value="existing">Existing</option>
                </select>
              </div>
            </div>
            <div className={style.cardDiv}>
              {currentVideogames?.map((g) => {
                return (
                  <Card
                    // className={style.card}
                    id={g.id}
                    key={g.id.toString()}
                    name={g.name.toUpperCase()}
                    image={g.background_image}
                    genres={g.genres.map((gen) => {
                      return `${gen.name}`;
                    })}
                  />
                );
              })}
            </div>
            <Paginado
              videogamesPerPage={videogamesPerPage}
              allVideogames={allVideogames.length}
              paginado={paginado}
              key="Paginado"
            />
          </div>
        </div>
      ) : (
        <div className={style.contenedor}>
          <div className={style.divNotFound}>
            <img className={style.loader} src={myLoader} alt="#" />
            <Link to="/">
              <button className={style.btnHome}>BACK HOME</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
