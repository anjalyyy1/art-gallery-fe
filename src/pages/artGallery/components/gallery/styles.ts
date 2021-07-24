import styled from 'styled-components';

export const GalleryWrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, 180px);
  grid-gap: 20px;
  max-width: 1440px;
  margin: 0 auto;
  margin-top: 100px;
`;

export const ArtWrapper = styled.li``;

export const GalleryImageWrapper = styled.div``;

export const GalleryImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

export const CreatorImageWrapper = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin: 20px auto 0;
`;

export const CreatorImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

export const CreatorName = styled.span``;

export const ArtName = styled.span``;

export const Creator = styled.div``;

export const Price = styled.span``;
