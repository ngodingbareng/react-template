import { CHANGE_TOGGLE } from '../actions/types';

const initialState = {
  toggleNav: {}
};

export default function(state = initialState, action) {
  switch(action.type) {
    case CHANGE_TOGGLE:
      return {
        ...state,
        toggleNav: action.payload
      };
    default: 
      return state;
  }
}