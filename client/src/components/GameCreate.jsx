import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getGenres, getPlatforms, addNewGame } from "../actions";
import style from "./styles/GameCreate.module.css";
import btn from "./styles/img/equis.png";

const validate = (input) => {
  let errors = {};
  if (input.name === "") {
    errors.name = "Name incomplete";
  }
  if (input.name.length > 255) {
    errors.name = "Must be less then 255 characters";
  }
  if (!input.background_image) {
    errors.background_image = "It need an URL of an image";
  }
  if (!input.description) {
    errors.description = "Description incomplete";
  }
  if (input.rating > 5 || input.rating < 0) {
    errors.rating = "Rating must be between 0 and 5";
  }
  if (!input.released) {
    errors.released = "It need a date of when it was released";
  }
  if (input.platforms.length === 0) {
    errors.platforms = "Choose at least one platform to continue";
  }
  if (input.genres.length === 0) {
    errors.genres = "Choose at least one genre to continue";
  }
  return errors;
};

export default function GameCreate() {
  const history = useHistory();
  const dispatch = useDispatch();
  const genres = useSelector((state) => state.genres);
  const platforms = useSelector((state) => state.platforms);
  const [input, setInput] = useState({
    name: "",
    background_image: "",
    description: "",
    platforms: [],
    rating: 0,
    released: "",
    genres: [],
  });
  const [errors, setErrors] = useState({});
  useEffect(() => {
    dispatch(getGenres());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getPlatforms());
  }, [dispatch]);

  useEffect(() => {
    setErrors(validate(input));
  }, [input]);
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(addNewGame(input));
    alert("Personaje creado!!");
    setInput({
      name: "",
      background_image: "",
      description: "",
      platforms: [],
      rating: 0,
      released: "",
      genres: [],
    });
    history.push("/home");
  }

  function handleChange(e) {
    e.preventDefault();
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
    console.log(input);
  }

  function handleSelectP(e) {
    e.preventDefault();
    if (!input.platforms.includes(e.target.value)) {
      setInput({
        ...input,
        platforms: [...input.platforms, e.target.value],
      });
    }
    setErrors(
      validate({
        ...input,
        platforms: [...input.platforms, e.target.value],
      })
    );
  }

  function handleSelectG(e) {
    e.preventDefault();
    if (!input.genres.includes(e.target.value)) {
      setInput({
        ...input,
        genres: [...input.genres, e.target.value],
      });
      setErrors(
        validate({
          ...input,
          genres: [...input.genres, e.target.value],
        })
      );
    }
  }

  function handleDeleteP(e) {
    setInput({
      ...input,
      platforms: input.platforms.filter((p) => p !== e),
    });
  }

  function handleDeleteG(e) {
    setInput({
      ...input,
      genres: input.genres.filter((g) => g !== e),
    });
  }

  return (
    <div className={style.div}>
      <div className={style.form}>
        <h1>Crea tu videojuego</h1>
        <form className={style.formGrid} onSubmit={handleSubmit}>
          <div className={style.box1}>
            <div>
              <label className={style.label}>Name</label>
              <input
                type="text"
                placeholder="Name of the game"
                value={input.name}
                name="name"
                onChange={handleChange}
              ></input>
              {errors.name && (
                <small className={style.small}>{errors.name}</small>
              )}
            </div>
            <div>
              <label className={style.label}>Image</label>
              <input
                type="text"
                placeholder="Put the URL of the image"
                value={input.background_image}
                name="background_image"
                onChange={handleChange}
              ></input>
              {errors.background_image && (
                <small className={style.small}>{errors.background_image}</small>
              )}
            </div>
          </div>
          <div className={style.box3}>
            <div>
              <label className={style.label}>Rating</label>
              <input
                type="number"
                value={input.rating}
                name="rating"
                onChange={handleChange}
                step="0.01"
                min="0"
                max="5"
              ></input>
              {errors.rating && (
                <small className={style.small}>{errors.rating}</small>
              )}
            </div>
            <div>
              <label className={style.label}>Releasead</label>
              <input
                placeholder="when was it released?"
                type="date"
                value={input.released}
                name="released"
                onChange={handleChange}
              ></input>
              {errors.released && (
                <small className={style.small}>{errors.released}</small>
              )}
            </div>
          </div>
          <div className={style.box4}>
            <label className={style.label}>Platforms</label>
            <div>
              <select
                name="platforms"
                key="plat"
                onChange={(e) => handleSelectP(e)}
              >
                <option hidden>Platforms</option>
                {platforms?.map((p) => (
                  <option value={p} key={p}>
                    {p}
                  </option>
                ))}
              </select>
            </div>
            <div className={style.plat}>
              {!input.platforms.length ? (
                <small className={style.small}>Select Platforms</small>
              ) : (
                input.platforms.map((e) => (
                  <p key={e}>
                    {e}
                    <button onClick={() => handleDeleteP(e)}>
                      <img src={btn} alt="#" />
                    </button>
                  </p>
                ))
              )}
            </div>
          </div>
          <div className={style.box5}>
            <label className={style.label}>Genres</label>
            <div>
              <select
                name="genres"
                key="gen"
                onChange={(e) => handleSelectG(e)}
              >
                <option hidden>Genres</option>
                {genres.map((g) => (
                  <option value={g.name} key={g.name}>
                    {g.name}
                  </option>
                ))}
              </select>
            </div>
            <div className={style.gen}>
              {!input.genres.length ? (
                <small className={style.small}>Select Genres</small>
              ) : (
                input.genres.map((e) => (
                  <p key={e}>
                    {e}
                    <button onClick={() => handleDeleteG(e)}>
                      <img src={btn} alt="#" />
                    </button>
                  </p>
                ))
              )}
            </div>
          </div>
          <div className={style.box2}>
            <label className={style.label}>Description</label>
            <textarea
              rows="5"
              cols="50"
              value={input.description}
              name="description"
              onChange={handleChange}
              placeholder="What is it about?"
            ></textarea>
            {errors.description && (
              <small className={style.small}>{errors.description}</small>
            )}
          </div>
        </form>
        <div className={style.btn}>
          <button
            onClick={handleSubmit}
            disabled={
              input.platforms.length < 1 ||
              input.platforms.length > 5 ||
              input.genres.length < 1 ||
              input.genres.length > 5
                ? true
                : false
            }
            type="submit"
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
}
