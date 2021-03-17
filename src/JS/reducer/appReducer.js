import {
    ADD,
    DELETE,
    GET_USER
  } from "../const/actionTypes";
  let initialState = {
    users: [],
  }; 
  export default function appReducer(state = initialState, action) {
    switch (action.type) {
      case ADD:
        return {
          ...state,
          users: [...state.users, action.payload],
        };
    case GET_USER:
        return { ...state, users: action.payload.data };
      case DELETE:
        return {
          ...state,
          users: state.users.filter((user) => user.id !== action.payload),
        };
      default:
        return state;
    }
  };