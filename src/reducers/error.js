const INITAL_STATE = {
  errorMessage: "",
};

const errorReducer = (state = INITAL_STATE, action) => {
  switch (action.type) {
    case "429":
      return {
        ...state,
        errorMessage: "429",
      };
    case "zero":
      return {
        ...state,
        errorMessage: "zero",
      };
    default:
      return state;
  }
};
export default errorReducer;
