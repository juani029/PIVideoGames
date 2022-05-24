import axios from "axios";
export const GET_GAMES = "GET_GAMES";
export const FYLTER_BY_GENRES = "FYLTER_BY_GENRES";
export const GET_GENRES = "GET_GENRES";
export const FYLTER_BY_CREATED = "FYLTER_BY_CREATED";
export const ORDER_GAMES = "ORDER_GAMES";
export const GET_GAMES_BY_NAME = "GET_GAMES_BY_NAME";
export const POST_GAME = "POST_GAME";
export const GET_PLATFORMS = "GET_PLATFORMS";
export const GET_DETAIL= "GET_DETAIL"

export function getGames() {
  return async function (dispatch) {
    try {
      var json = await axios("http://localhost:3002/videogames");
      return dispatch({
        type: GET_GAMES,
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
export function filterByGenres(payload) {
  return {
    type: FYLTER_BY_GENRES,
    payload,
  };
}

export function getGenres() {
  return async function (dispatch) {
    try {
      var genres = await axios("http://localhost:3002/genres");
      return dispatch({
        type: GET_GENRES,
        payload: genres.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export const getPlatforms = () => {
  return async function (dispatch) {
    try {
      var platforms = await axios("http://localhost:3002/platforms");
      return dispatch({
        type: GET_PLATFORMS,
        payload: platforms.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export function getGamesByNames(name) {
  return async function (dispatch) {
    try {
      var game = await axios(`http://localhost:3002/videogames?name=${name}`);
      return dispatch({
        type: GET_GAMES_BY_NAME,
        payload: game.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function filterByCreated(payload) {
  return {
    type: FYLTER_BY_CREATED,
    payload,
  };
}

export function orderGames(payload) {
  return {
    type: ORDER_GAMES,
    payload,
  };
}

// export function alphabeticalOrder(payload) {
//   return {
//     type: ALPHABETICAL_ORDER,
//     payload,
//   };
// }

// export function ratingOrder(payload) {
//   return {
//     type: RATING_ORDER,
//     payload,
//   };
// }

export function addNewGame(payload) {
    return async function () {
      try {
      const response = await axios.post(
        "http://localhost:3002/videogame",
        payload
      );
      return response;
      }catch (error) {
        console.log(error);
      }
  }
}

export function uploadImage(payload) {
  return async function () {
    try {
      const response = await axios.post
    } catch (error) {
      
    }
  }
}

export function getDetail(id){
  return async function(dispatch){
    try {
      const detail = await axios.get(`http://localhost:3002/videogame/${id}`)
      return dispatch({
        type: GET_DETAIL,
        payload: detail.data
      })
    } catch (error) {
      console.log(error)
    }
  }
}
