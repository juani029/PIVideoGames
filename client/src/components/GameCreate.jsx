import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { getGenres, getPlatforms, addNewGame } from "../actions";

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
  }, []);

  useEffect(() => {
    dispatch(getPlatforms());
  }, []);

  useEffect(() => {
    setErrors(validate(input));
  }, []);
  function handleSubmit(e) {
    e.preventDefault();
    console.log(input);
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
    <div>
      <Link to="/home">
        <button>Volver</button>
      </Link>
      <h1>Crea tu videojuego</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input
            type="text"
            placeholder="Name of the game"
            value={input.name}
            name="name"
            onChange={handleChange}
          ></input>
          {errors.name && <p>{errors.name}</p>}
        </div>
        <div>
          <label>Image: </label>
          <input
            type="text"
            placeholder="Put the URL of the image"
            value={input.background_image}
            name="background_image"
            onChange={handleChange}
          ></input>
          {errors.background_image && <p>{errors.background_image}</p>}
        </div>
        <div>
          <label>Description: </label>
          <textarea
            rows="5"
            cols="50"
            value={input.description}
            name="description"
            onChange={handleChange}
            placeholder="What is it about?"
          ></textarea>
          {errors.description && <p>{errors.description}</p>}
        </div>
        <div>
          <label>Rating: </label>
          <input
            type="number"
            value={input.rating}
            name="rating"
            onChange={handleChange}
            step="0.01"
            min="0"
            max="5"
          ></input>
          {errors.rating && <p>{errors.rating}</p>}
        </div>
        <div>
          <label>Releasead: </label>
          <input
            placeholder="when was it released?"
            type="date"
            value={input.released}
            name="released"
            onChange={handleChange}
          ></input>
          {errors.released && <p>{errors.released}</p>}
        </div>
        <div>
          <label>Platforms: </label>
          <select
            name="platforms"
            key="plat"
            onChange={(e) => handleSelectP(e)}
          >
            {/* <option value={""}>Escoja una:</option> */}
            {platforms?.map((p) => (
              <option value={p} key={p}>
                {p}
              </option>
            ))}
          </select>
          <ul>
            {!input.platforms.length ? (
              <p>Select Platforms</p>
            ) : (
              input.platforms.map((e) => (
                <li key={e}>
                  {e}
                  <button onClick={() => handleDeleteP(e)}>X</button>
                </li>
              ))
            )}
          </ul>
          {/* {errors.platforms && <p>{errors.platforms}</p>} */}
        </div>
        <div>
          <label>Genres: </label>
          <select name="genres" key="gen" onChange={(e) => handleSelectG(e)}>
            {genres.map((g) => (
              <option value={g.name} key={g.name}>
                {g.name}
              </option>
            ))}
          </select>
          {/* {errors.genres && <p>{errors.genres}</p>} */}
          <ul>
            {!input.genres.length ? (
              <p>Select Genres</p>
            ) : (
              input.genres.map((e) => (
                <li key={e}>
                  {e}
                  <button onClick={() => handleDeleteG(e)}>X</button>
                </li>
              ))
            )}
          </ul>
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
}
