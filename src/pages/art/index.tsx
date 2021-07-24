import get from 'lodash/get';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getSingleArt } from 'store/actions/artsActions';
import { useAppDispatch, useAppSelector } from 'ts/hooks';
import {
  ArtDetails,
  ArtImage,
  ArtImageWrapper,
  ArtWrapper,
  CreatedBy,
  Description,
  Price,
} from './styles';

type Props = {
  artistsData: any[];
};

const Art: React.FunctionComponent<Props> = () => {
  const dispatch = useAppDispatch();
  const artId = useParams();

  const { artDetails } = useAppSelector(state => {
    const {
      ArtsReducer: { artDetails },
    } = state;
    return {
      artDetails,
    };
  });

  useEffect(() => {
    dispatch(getSingleArt(get(artId, `id`)));
  }, [artId, dispatch]);

  return (
    <ArtWrapper>
      <ArtImageWrapper>
        <ArtImage src={get(artDetails, `imageUrl`)} />
      </ArtImageWrapper>
      <ArtDetails>
        <CreatedBy>Created By - {get(artDetails, `artist.name`)}</CreatedBy>
        <Description>{get(artDetails, `description`)}</Description>
        <Price>${get(artDetails, `price`)}</Price>
      </ArtDetails>
    </ArtWrapper>
  );
};

export default Art;
