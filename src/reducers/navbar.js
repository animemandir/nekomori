const myState = {
  season: "SPRING",
};

const navbarReducer = (state = myState, action) => {
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
