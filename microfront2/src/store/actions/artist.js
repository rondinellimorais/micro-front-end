import {SELECTED_ARTIST} from './types';

const addSelectedArtist = (artist) => ({
  type: SELECTED_ARTIST,
  payload: {
    artist,
  },
});

export {addSelectedArtist};
