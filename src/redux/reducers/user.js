import { SET_ACCESS_TOKEN, SET_USER } from "../types/user";

const defaultState = {
  id: null,
  accessToken: null,
};

export function userReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.payload };
      case SET_ACCESS_TOKEN: 
      return { ...state, accessToken: action.payload };
    default:
      return state;
  }
}
