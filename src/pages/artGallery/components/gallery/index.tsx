import { get, map } from 'lodash';
import React from 'react';
import {
  GalleryWrapper,
  ArtWrapper,
  GalleryImageWrapper,
  GalleryImage,
  CreatorImageWrapper,
  CreatorImage,
  ArtName,
  CreatorName,
  Creator,
  Price,
} from './styles';

type Props = {
  artGalleryData: any[];
};

const Gallery: React.FunctionComponent<Props> = props => {
  const { artGalleryData } = props;
  return (
    <GalleryWrapper>
      {map(artGalleryData, eachItem => {
        return (
          <ArtWrapper>
            <GalleryImageWrapper>
              <GalleryImage src={get(eachItem, `imageUrl`)} />
            </GalleryImageWrapper>

            <Creator>
              <CreatorImageWrapper>
                <CreatorImage src="https://i.picsum.photos/id/237/536/354.jpg?hmac=i0yVXW1ORpyCZpQ-CknuyV-jbtU7_x9EBQVhvT5aRr0" />
              </CreatorImageWrapper>
              <CreatorName>{get(eachItem, `artistName`)}</CreatorName>
              <ArtName>{get(eachItem, `artName`)}</ArtName>
            </Creator>

            <Price>{get(eachItem, `price`)}</Price>
          </ArtWrapper>
        );
      })}
    </GalleryWrapper>
  );
};

export default Gallery;
