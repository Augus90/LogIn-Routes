export const STATES = {
  LOGIN: "login",
  CLEAR: "clear",
};

export const login = (logName, logId) => {
  return (dispatch) => {
    dispatch({
      type: STATES.LOGIN,
      payload: {
        name: "Pepe",
        id: 1,
      },
    });
  };
};
