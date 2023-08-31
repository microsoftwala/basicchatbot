// actions.js
export const SET_USER_NAME = "SET_USER_NAME";

export const setUserName = (name, age) => ({
  type: SET_USER_NAME,
  payload: name,
  payload1: age,
});
