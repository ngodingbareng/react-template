import {
  GET_USERS,
  USER_INSERT,
  USER_DELETE,
  USER_DETAIL,
  USER_UPDATE
} from "../actions/types";

const initialState = {
  users: [],
  user: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        users: action.payload
      };
    case USER_DETAIL:
      return {
        ...state,
        user: action.payload
      };
    case USER_DELETE:
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.payload)
      };
    case USER_INSERT:
      return {
        ...state,
        users: [action.payload, ...state.users]
      };
    case USER_UPDATE:
      return {
        ...state,
        users: state.users.map(
          user =>
          user.id === action.payload.id
              ? (user = action.payload)
              : user
        )
      };
    default:
      return state;
  }
}
