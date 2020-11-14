import { SET_USER } from "../types/user";

const defaultState = {
  id: null,
};

export function userReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.payload };
    default:
      return state;
  }
}
