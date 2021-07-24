import { ActionType } from 'ts/types';
import { ArtistTypes } from 'store/types';

export const getArtists = (): ActionType => ({
  type: ArtistTypes.GET_ARTISTS,
});

export const setArtists = (artists: any[]): ActionType => ({
  type: ArtistTypes.SET_ARTISTS,
  artists,
});
