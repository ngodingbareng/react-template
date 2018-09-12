import { OPEN_MODAL, CLOSE_MODAL} from "./types";

export const openModal = (modal) => async dispatch => {
  dispatch({
    type: OPEN_MODAL,
    modal
  });
};

export const closeModal = (modal) => async dispatch => {
  dispatch({
    type: CLOSE_MODAL,
    modal
  });
};
