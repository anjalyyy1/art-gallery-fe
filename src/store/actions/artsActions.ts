import { ActionType } from 'ts/types';
import { ArtTypes } from 'store/types';

export const getArts = (sort: string, status: string | null): ActionType => ({
  type: ArtTypes.GET_ARTS,
  sort,
  status,
});

export const getSingleArt = (artId: string): ActionType => ({
  type: ArtTypes.GET_ART,
  artId,
});

export const setArts = (arts: any[]): ActionType => ({
  type: ArtTypes.SET_ART,
  arts,
});

export const setArtDetails = (artDetails: any): ActionType => ({
  type: ArtTypes.SET_ART_DETAILS,
  artDetails,
});
