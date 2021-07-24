import { ArtistTypes } from 'store/types';
import createReducer from 'redux/createReducer';

type ReducerType = {
  artists: any[];
};

const initialState: ReducerType = {
  artists: [],
};

const ArtistReducer = createReducer(initialState, {
  ...ArtistTypes,
});

export default ArtistReducer;
