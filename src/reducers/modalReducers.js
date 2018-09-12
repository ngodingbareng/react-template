import {
  OPEN_MODAL,
  CLOSE_MODAL
} from "../actions/types";

const initialState = {
  modal: false,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        ...state,
        modal: !state.modal
      };
    case CLOSE_MODAL:
      return {
        ...state,
        modal: !state.modal
      };
    default:
      return state;
  }
}
