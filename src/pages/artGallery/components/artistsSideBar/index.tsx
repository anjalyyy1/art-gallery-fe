import { get, map } from 'lodash';
import React from 'react';
import {
  ArtistSideBarWrapper,
  Creator,
  CreatorImageWrapper,
  CreatorImage,
  CreatorName,
} from './styles';
const dummyData = [
  {
    id: 1,
    artistImage:
      'https://i.picsum.photos/id/609/536/354.jpg?hmac=tVnz1exGJpbwT-2P8MWOvapIg7nTpSQ5SCeUHyu_7mU',
    name: 'John',
  },
  {
    id: 1,
    artistImage:
      'https://i.picsum.photos/id/609/536/354.jpg?hmac=tVnz1exGJpbwT-2P8MWOvapIg7nTpSQ5SCeUHyu_7mU',
    name: 'John',
  },
  {
    id: 1,
    artistImage:
      'https://i.picsum.photos/id/609/536/354.jpg?hmac=tVnz1exGJpbwT-2P8MWOvapIg7nTpSQ5SCeUHyu_7mU',
    name: 'John',
  },
  {
    id: 1,
    artistImage:
      'https://i.picsum.photos/id/609/536/354.jpg?hmac=tVnz1exGJpbwT-2P8MWOvapIg7nTpSQ5SCeUHyu_7mU',
    name: 'John',
  },
  {
    id: 1,
    artistImage:
      'https://i.picsum.photos/id/609/536/354.jpg?hmac=tVnz1exGJpbwT-2P8MWOvapIg7nTpSQ5SCeUHyu_7mU',
    name: 'John',
  },
  {
    id: 1,
    artistImage:
      'https://i.picsum.photos/id/609/536/354.jpg?hmac=tVnz1exGJpbwT-2P8MWOvapIg7nTpSQ5SCeUHyu_7mU',
    name: 'John',
  },
  {
    id: 1,
    artistImage:
      'https://i.picsum.photos/id/609/536/354.jpg?hmac=tVnz1exGJpbwT-2P8MWOvapIg7nTpSQ5SCeUHyu_7mU',
    name: 'John',
  },
  {
    id: 1,
    artistImage:
      'https://i.picsum.photos/id/609/536/354.jpg?hmac=tVnz1exGJpbwT-2P8MWOvapIg7nTpSQ5SCeUHyu_7mU',
    name: 'John',
  },
  {
    id: 1,
    artistImage:
      'https://i.picsum.photos/id/609/536/354.jpg?hmac=tVnz1exGJpbwT-2P8MWOvapIg7nTpSQ5SCeUHyu_7mU',
    name: 'John',
  },
];

const ArtistSideBar: React.FunctionComponent = () => {
  return (
    <ArtistSideBarWrapper>
      {map(dummyData, eachItem => {
        return (
          <Creator>
            <CreatorImageWrapper>
              <CreatorImage src="https://i.picsum.photos/id/237/536/354.jpg?hmac=i0yVXW1ORpyCZpQ-CknuyV-jbtU7_x9EBQVhvT5aRr0" />
            </CreatorImageWrapper>
            <CreatorName>{get(eachItem, `name`)}</CreatorName>
          </Creator>
        );
      })}
    </ArtistSideBarWrapper>
  );
};

export default ArtistSideBar;
