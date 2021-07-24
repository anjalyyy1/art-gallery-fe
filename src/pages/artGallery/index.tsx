// libraries
import React, { useCallback, useEffect, useState } from 'react';

// components
import Dropdown from 'elements/dropdown';
import ArtistSideBar from './components/artistsSideBar';
import Filter from './components/filter';
import Gallery from './components/gallery';

// services
import { getArtists } from 'store/actions/artistActions';
import { getArts } from 'store/actions/artsActions';
import { useAppDispatch, useAppSelector } from 'ts/hooks';

// styles
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
  // state
  const [status, setStatus] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState(options[0]);

  // redux
  const dispatch = useAppDispatch();
  const { arts, artists, isArtistLoading } = useAppSelector(state => {
    const {
      ArtsReducer: { arts, isArtLoading },
      ArtistReducer: { artists, isArtistLoading },
    } = state;
    return {
      arts,
      artists,
      isArtistLoading,
      isArtLoading,
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
          <Price>$2222.70</Price>
          <ImageWrapper>
            <Image src="https://via.placeholder.com/150/000000/FFFFFF/" />
          </ImageWrapper>
        </BannerText>
      </BannerWrapper>

      <ArtGalleryWrapper>
        <SideBarWrapper>
          <ArtistSideBar
            isArtistLoading={isArtistLoading}
            artistsData={artists}
          />
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
