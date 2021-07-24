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
  Details,
  Status,
  ArtLink,
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
          <ArtWrapper key={eachItem._id}>
            <ArtLink to={`arts/${eachItem._id}`}>
              {eachItem.status === 'sold' && <Status>Sold</Status>}

              <GalleryImageWrapper>
                <GalleryImage src={get(eachItem, `imageUrl`)} />
              </GalleryImageWrapper>

              <Creator>
                <CreatorImageWrapper>
                  <CreatorImage src="https://i.picsum.photos/id/237/536/354.jpg?hmac=i0yVXW1ORpyCZpQ-CknuyV-jbtU7_x9EBQVhvT5aRr0" />
                </CreatorImageWrapper>
                <Details>
                  <CreatorName>{get(eachItem, `artist.name`)}</CreatorName>
                  <ArtName>{get(eachItem, `name`)}</ArtName>
                </Details>
              </Creator>

              <Price>${get(eachItem, `price`)}</Price>
            </ArtLink>
          </ArtWrapper>
        );
      })}
    </GalleryWrapper>
  );
};

export default Gallery;
