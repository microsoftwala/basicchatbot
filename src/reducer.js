import { SET_USER_NAME } from "./action";

const initialState = {
  userName: "",
  age: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_NAME:
      return {
        ...state,
        userName: action.payload,
        age: action.payload1,
      };
    default:
      return state;
  }
};

export default reducer;
