import {
  GET_GAMES,
  FYLTER_BY_GENRES,
  GET_GENRES,
  FYLTER_BY_CREATED,
  ORDER_GAMES,
  GET_GAMES_BY_NAME,
  POST_GAME,
  GET_PLATFORMS,
  GET_DETAIL
} from "../actions";
const initialState = {
  videoGames: [],
  allVideogames: [],
  genres: [],
  detail: [],
  platforms: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    
    case GET_GAMES:
      return {
        ...state,
        videoGames: action.payload,
        allVideogames: action.payload,
        loading: false,
      };

    case GET_GAMES_BY_NAME:
        return {
            ...state,
            videoGames: action.payload
        }

    case FYLTER_BY_GENRES:
      const videoGames = [...state.allVideogames]
      const genresFilter = action.payload.includes("All")
        ? videoGames
        : videoGames.filter((game) =>
            game.genres.map((genre) => genre.name).includes(action.payload)
          );
      return {
        ...state,
        videoGames: genresFilter,
      };

    case GET_GENRES: {
      return {
        ...state,
        genres: action.payload,
      };
    }

    case GET_PLATFORMS: {
      return {
          ...state,
          platforms: action.payload,
      };
  }

    case FYLTER_BY_CREATED: {
      const games =  [...state.allVideogames]
      const createdFilter = action.payload.includes("created")
        ? games.filter((game) => game.createdInDb)
        : games.filter((game) => !game.createdInDb);
      return {
        ...state,
        videoGames: action.payload === "all" ? games : createdFilter,
      };
    }

    case ORDER_GAMES: {
      const games1 =  [...state.videoGames]
      let sortGames
      if(action.payload === "a-z") {
         sortGames = games1.sort((a, b) => {
          if (a.name > b.name) {
            return 1;
          }
          if (a.name < b.name) {
            return -1;
          }
          return 0;
        })
      } else if(action.payload === "z-a"){
         sortGames = games1.sort((a, b) => {
          if (a.name > b.name) {
            return -1;
          }
          if (a.name < b.name) {
            return 1;
          }
          return 0;
        })
      } else if(action.payload === "top"){
         sortGames = games1.sort((a, b) => {
          if (a.rating > b.rating) {
            return 1;
          }
          if (a.rating < b.rating) {
            return -1;
          }
          return 0;
        })
      } else if(action.payload === "btt"){
         sortGames = games1.sort((a, b) => {
          if (a.rating > b.rating) {
            return -1;
          }
          if (a.rating < b.rating) {
            return 1;
          }
          return 0;
        });
      }
        return {
            ...state,
            videoGames: action.payload === "alpha" ? games1 : sortGames
        }
    }

    case POST_GAME:{
        return{
            ...state
        }
    }

    case GET_DETAIL:{
      return{
        ...state,
        detail: action.payload
      }
    }
    default:
      return state;
  }
}

export default rootReducer;
