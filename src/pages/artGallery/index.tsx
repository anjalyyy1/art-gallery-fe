import Dropdown from 'elements/dropdown';
import React from 'react';
import ArtistSideBar from './components/artistsSideBar';
import Filter from './components/filter';
import Gallery from './components/gallery';
import {
  Banner,
  BannerHeading,
  BannerText,
  BannerWrapper,
  HelperText,
  ImageWrapper,
  PageWrapper,
  Price,
  Image,
} from './styles';

const options = [
  {
    value: 'high',
    label: 'Highest Price',
  },
  {
    value: 'low',
    label: 'Lowest Price',
  },
];

const ArtGallery: React.FunctionComponent = () => {
  return (
    <PageWrapper>
      <BannerWrapper>
        <Banner />
        <BannerText>
          <BannerHeading>Art Title</BannerHeading>
          <HelperText>Last Sold / 222 Sold</HelperText>
          <Price>$2222</Price>
          <ImageWrapper>
            <Image src="https://i.picsum.photos/id/588/536/354.jpg?hmac=FS4txF2tmMT0SRStw2KU_qJ7QII1GLJZBgSw_xSfrZg" />
          </ImageWrapper>
        </BannerText>
      </BannerWrapper>
      <Filter />
      <Dropdown options={options} />
      <ArtistSideBar />
      <Gallery artGalleryData={dummyData} />
    </PageWrapper>
  );
};

const dummyData = [
  {
    id: 1,
    imageUrl:
      'https://i.picsum.photos/id/609/536/354.jpg?hmac=tVnz1exGJpbwT-2P8MWOvapIg7nTpSQ5SCeUHyu_7mU',
    name: 'Art 1',
    artist: 'John',
    description:
      "Just add your desired image size (width & height) after our URL, and you'll get a random image.",
    price: 100,
    status: 'sold',
  },
  {
    id: 1,
    imageUrl:
      'https://i.picsum.photos/id/609/536/354.jpg?hmac=tVnz1exGJpbwT-2P8MWOvapIg7nTpSQ5SCeUHyu_7mU',
    name: 'Art 1',
    artist: 'John',
    description:
      "Just add your desired image size (width & height) after our URL, and you'll get a random image.",
    price: 100,
    status: 'sold',
  },
  {
    id: 1,
    imageUrl:
      'https://i.picsum.photos/id/609/536/354.jpg?hmac=tVnz1exGJpbwT-2P8MWOvapIg7nTpSQ5SCeUHyu_7mU',
    name: 'Art 1',
    artist: 'John',
    description:
      "Just add your desired image size (width & height) after our URL, and you'll get a random image.",
    price: 100,
    status: 'sold',
  },
  {
    id: 1,
    imageUrl:
      'https://i.picsum.photos/id/609/536/354.jpg?hmac=tVnz1exGJpbwT-2P8MWOvapIg7nTpSQ5SCeUHyu_7mU',
    name: 'Art 1',
    artist: 'John',
    description:
      "Just add your desired image size (width & height) after our URL, and you'll get a random image.",
    price: 100,
    status: 'sold',
  },
  {
    id: 1,
    imageUrl:
      'https://i.picsum.photos/id/609/536/354.jpg?hmac=tVnz1exGJpbwT-2P8MWOvapIg7nTpSQ5SCeUHyu_7mU',
    name: 'Art 1',
    artist: 'John',
    description:
      "Just add your desired image size (width & height) after our URL, and you'll get a random image.",
    price: 100,
    status: 'sold',
  },
  {
    id: 1,
    imageUrl:
      'https://i.picsum.photos/id/609/536/354.jpg?hmac=tVnz1exGJpbwT-2P8MWOvapIg7nTpSQ5SCeUHyu_7mU',
    name: 'Art 1',
    artist: 'John',
    description:
      "Just add your desired image size (width & height) after our URL, and you'll get a random image.",
    price: 100,
    status: 'sold',
  },
  {
    id: 1,
    imageUrl:
      'https://i.picsum.photos/id/609/536/354.jpg?hmac=tVnz1exGJpbwT-2P8MWOvapIg7nTpSQ5SCeUHyu_7mU',
    name: 'Art 1',
    artist: 'John',
    description:
      "Just add your desired image size (width & height) after our URL, and you'll get a random image.",
    price: 100,
    status: 'sold',
  },
  {
    id: 1,
    imageUrl:
      'https://i.picsum.photos/id/609/536/354.jpg?hmac=tVnz1exGJpbwT-2P8MWOvapIg7nTpSQ5SCeUHyu_7mU',
    name: 'Art 1',
    artist: 'John',
    description:
      "Just add your desired image size (width & height) after our URL, and you'll get a random image.",
    price: 100,
    status: 'sold',
  },
  {
    id: 1,
    imageUrl:
      'https://i.picsum.photos/id/609/536/354.jpg?hmac=tVnz1exGJpbwT-2P8MWOvapIg7nTpSQ5SCeUHyu_7mU',
    name: 'Art 1',
    artist: 'John',
    description:
      "Just add your desired image size (width & height) after our URL, and you'll get a random image.",
    price: 100,
    status: 'sold',
  },
  {
    id: 1,
    imageUrl:
      'https://i.picsum.photos/id/609/536/354.jpg?hmac=tVnz1exGJpbwT-2P8MWOvapIg7nTpSQ5SCeUHyu_7mU',
    name: 'Art 1',
    artist: 'John',
    description:
      "Just add your desired image size (width & height) after our URL, and you'll get a random image.",
    price: 100,
    status: 'sold',
  },
  {
    id: 1,
    imageUrl:
      'https://i.picsum.photos/id/609/536/354.jpg?hmac=tVnz1exGJpbwT-2P8MWOvapIg7nTpSQ5SCeUHyu_7mU',
    name: 'Art 1',
    artist: 'John',
    description:
      "Just add your desired image size (width & height) after our URL, and you'll get a random image.",
    price: 100,
    status: 'sold',
  },
];

export default ArtGallery;
