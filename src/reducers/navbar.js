const INITIAL_STATE = {
  season: "SPRING",
  status: null,
  year: new Date().getFullYear(),
};

const navbarReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "CHANGE_SEASON":
      return {
        ...state,
        season: action.payload,
        status: null,
      };

    case "CHANGE_SEASON_TBA":
      return {
        ...state,
        season: null,
        status: action.payload,
      };

    case "RELEASING":
      return {
        ...state,
        status: action.payload,
      };
    case "CHANGE_YEAR":
      return {
        ...state,
        year: action.payload,
      };

    default:
      return state;
  }
};

export default navbarReducer;
