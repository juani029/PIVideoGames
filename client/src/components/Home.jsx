import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getGames,
  filterByGenres,
  getGenres,
  filterByCreated,
  alphabeticalOrder,
  ratingOrder,
} from "../actions";
import Card from "./Card";
import Paginado from "./Paginado";
import style from "./styles/Home.module.css";

export default function Home() {
  const dispatch = useDispatch();
  const allVideogames = useSelector((state) => state.videoGames);
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

  const handleSortAlphabetical = (e) => {
    e.preventDefault();
    dispatch(alphabeticalOrder(e.target.value));
    setCurrentPage(1);
    // setOrden("")
  };

  const handleSortRating = (e) => {
    e.preventDefault();
    dispatch(ratingOrder(e.target.value));
    setCurrentPage(1);
  };

  return (
    <div>
      {/* <Link to="/created" className={style.link}>
        Crear videogame
      </Link> */}
      <div className={style.div}>
        <div>
          <div className={style.filters}>
            <div className={style.contFilter}>
              <p>Order by Genre</p>
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
              <p>Alphabetic Order</p>
              <select onChange={handleSortAlphabetical} key="Alpha">
                <option value="alpha">All</option>
                <option value="a-z">A-Z</option>
                <option value="z-a">Z-A</option>
              </select>
            </div>
            <div className={style.contFilter}>
              <p>Order by Rating</p>
              <select onChange={handleSortRating} key="Rating">
                <option value="rating">All</option>
                <option value="top">Top</option>
                <option value="btt">Bottom</option>
              </select>
            </div>
            <div className={style.contFilter}>
              <p>Order by Created</p>
              <select onChange={handleFilterCreated} key="Created">
                <option value="all">All</option>
                <option value="created">Created</option>
                <option value="existing">Existing</option>
              </select>
            </div>
          </div>
          {/* {currentVideogames.length > 0 ?  */}
          {/* (<div>  */}
          <div className={style.cardDiv}>
            {currentVideogames?.map((g) => {
              return (
                <Card
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
        {/* ): null} */}
      </div>
    </div>
  );
}
