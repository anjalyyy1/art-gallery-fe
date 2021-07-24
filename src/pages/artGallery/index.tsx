import Dropdown from 'elements/dropdown';
import React, { useCallback, useEffect, useState } from 'react';
import { getArtists } from 'store/actions/artistActions';
import { getArts } from 'store/actions/artsActions';
import { useAppDispatch, useAppSelector } from 'ts/hooks';
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
  ArtGalleryWrapper,
  SideBarWrapper,
  GalleryWrapper,
  Filters,
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
  const dispatch = useAppDispatch();
  const [status, setStatus] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState(options[0]);

  const { arts, artists } = useAppSelector(state => {
    const {
      ArtsReducer: { arts },
      ArtistReducer: { artists },
    } = state;
    return {
      arts,
      artists,
    };
  });

  useEffect(() => {
    dispatch(getArtists());
  }, [dispatch]);

  const fetchArts = useCallback(
    (sortBy: string, filterBy: string | null) => {
      const sort = sortBy === 'high' ? '-' : '';
      dispatch(getArts(`${sort}price`, filterBy));
    },
    [dispatch]
  );

  useEffect(() => {
    fetchArts(sortBy.value, status);
  }, [fetchArts, sortBy.value, status]);

  const filterHandler = (filterBy: string | null) => {
    setStatus(filterBy);
    console.log(filterBy, 'filterBy');
    fetchArts(sortBy.value, filterBy);
  };

  return (
    <PageWrapper>
      {/* Banner */}
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

      <ArtGalleryWrapper>
        <SideBarWrapper>
          <ArtistSideBar artistsData={artists} />
        </SideBarWrapper>

        <GalleryWrapper>
          <Filters>
            <Filter activeTab={status} filterHandler={filterHandler} />
            <Dropdown
              className="sort-container"
              customProps={{
                isSearchable: false,
                isClearable: false,
                styles: {
                  control: () => ({
                    display: 'flex',
                    border: '1px solid grey',
                  }),
                  option: (provided: any) => ({
                    ...provided,
                    fontSize: '14px',
                  }),
                },
              }}
              selectedOption={sortBy}
              options={options}
              handleChange={e => {
                setSortBy(e);
              }}
            />
          </Filters>
          <Gallery artGalleryData={arts} />
        </GalleryWrapper>
      </ArtGalleryWrapper>
    </PageWrapper>
  );
};

export default ArtGallery;
