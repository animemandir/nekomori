const INITAL_STATE = {
  showModal: false,
  setShowModal: false,
};

const modalReducer = (state = INITAL_STATE, action) => {
  switch (action.type) {
    case "showModal":
      return {
        ...state,
        showModal: !state.showModal,
      };
    case "setShowModal":
      return {
        ...state,
        setShowModal: !state.setShowModal,
      };
    default:
      return state;
  }
};
export default modalReducer;
