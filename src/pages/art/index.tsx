import Spin from 'components/spinner';
import get from 'lodash/get';
import { Loader } from 'pages/artGallery/styles';
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
  NotArtFound,
  Price,
} from './styles';

type Props = {
  artistsData: any[];
};

const Art: React.FunctionComponent<Props> = () => {
  const dispatch = useAppDispatch();
  const artId = useParams();

  const { artDetails = {}, isArtLoading } = useAppSelector(state => {
    const {
      ArtsReducer: { artDetails, isArtLoading },
    } = state;
    return {
      artDetails,
      isArtLoading,
    };
  });

  useEffect(() => {
    dispatch(getSingleArt(get(artId, `id`)));
  }, [artId, dispatch]);

  if (isArtLoading) {
    return (
      <Loader>
        <Spin className="spinner-wrapper" /> Loading...
      </Loader>
    );
  }

  if (!Object.keys(artDetails).length) {
    return <NotArtFound>Art Not Found!!</NotArtFound>;
  }
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
