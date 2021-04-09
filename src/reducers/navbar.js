const INITIAL_STATE = {
  season: "SPRING",
};

const navbarReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "CHANGE_SEASON":
      return {
        ...state,
        season: action.payload,
      };

    default:
      return state;
  }
};

export default navbarReducer;
