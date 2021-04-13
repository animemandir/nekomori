export const changeSeasonToSpring = () => {
  return {
    type: "CHANGE_SEASON",
    payload: "SPRING",
  };
};

export const changeSeasonToFall = () => {
  return {
    type: "CHANGE_SEASON",
    payload: "FALL",
  };
};

export const changeSeasonToSummer = () => {
  return {
    type: "CHANGE_SEASON",
    payload: "SUMMER",
  };
};

export const changeSeasonToWinter = () => {
  return {
    type: "CHANGE_SEASON",
    payload: "WINTER",
  };
};

export const changeSeasonToTBA = () => {
  return {
    type: "CHANGE_SEASON_TBA",
    payload: "NOT_YET_RELEASED",
  };
};

export const changeSeasonToAiring = () => {
  return {
    type: "RELEASING",
    payload: "RELEASING",
  };
};

export const changeYear = (year) => {
  return {
    type: "CHANGE_YEAR",
    payload: year,
  };
};

export const displayError = () => {
  return {
    type: "429",
    payload: "429",
  };
};

export const removeError = () => {
  return {
    type: "zero",
    payload: "zero",
  };
};

export const showModal = () => {
  return {
    type: showModal,
  };
};

export const setShowModal = () => {
  return {
    type: setShowModal,
  };
};
