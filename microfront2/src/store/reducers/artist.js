import {SELECTED_ARTIST} from '../actions/types';

const INITIAL_STATE = {
  artist: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SELECTED_ARTIST:
      return {...state, ...action.payload};
    default:
      break;
  }
  return state;
};
