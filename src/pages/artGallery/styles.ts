import { CoverImage } from 'assets/images';
import styled from 'styled-components';

export const PageWrapper = styled.div``;

export const Banner = styled.div`
  background-image: url(${CoverImage});
  width: 100%;
  height: 20rem;
  background-size: cover;
`;

export const BannerText = styled.div`
  position: absolute;
`;

export const BannerWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const BannerHeading = styled.h2`
  font-size: 50px;
  font-weight: bold;
  margin-bottom: 40px;
  color: ${props => props.theme.COLOR_PALETTE.WHITE};
`;

export const HelperText = styled.span`
  font-size: 16px;
  display: block;
`;

export const Price = styled.span`
  font-size: 20px;
  font-weight: bold;
`;

export const ImageWrapper = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin: 20px auto 0;
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

export const ArtGalleryWrapper = styled.div`
  display: flex;
  max-width: 1140px;
  margin: 50px auto;
`;

export const SideBarWrapper = styled.div`
  width: 25%;
`;

export const GalleryWrapper = styled.div`
  flex: 1;
`;

export const Filters = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;

  .select__control {
    border-radius: 20px;
    width: 100%;
  }
  .sort-container {
    width: 150px;
  }

  .select__value-container {
    font-size: 13px;
  }
`;
