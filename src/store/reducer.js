import { combineReducers } from "redux";

const characters = (state = [], action) => {
  switch (action.type) {
    case "SET_CHARACTERS":
      return action.characters;
    default:
      return state;
  }
};

const reducer = combineReducers({
  characters,
});

export default reducer;
