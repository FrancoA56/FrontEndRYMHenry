import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./types";

const initialState = {
  myFavorites: [],
  allCharacters: [],
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_FAV:
      return {
        ...state,
        myFavorites: payload
      };
    case REMOVE_FAV:
      return {
        ...state,
        myFavorites: payload
      };
    case FILTER:
      const todosLosPersonajes = state.allCharacters.filter(
        (character) => character.gender === payload
      );
      return {
        ...state,
        myFavorites: todosLosPersonajes,
      };
    case ORDER:
      const sortedFavorites = [...state.allCharacters];
      if (payload === "A") {
        sortedFavorites.sort((a, b) => (a.name > b.name ? 1 : -1));
      } else if (payload === "D"){
        sortedFavorites.sort((a, b) => (a.name < b.name ? 1 : -1));
      }
      return {
        ...state,
        myFavorites: sortedFavorites,
      };
    default:
      return { ...state };
  }
};

export default rootReducer;
