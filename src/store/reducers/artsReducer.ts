import { ArtTypes } from 'store/types';
import createReducer from 'redux/createReducer';

type ReducerType = {
  arts: any[];
};

const initialState: ReducerType = {
  arts: [],
};

const ArtReducer = createReducer(initialState, {
  ...ArtTypes,
});

export default ArtReducer;
