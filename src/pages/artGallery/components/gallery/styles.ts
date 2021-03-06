import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const GalleryWrapper = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 30px 20px;
`;

export const ArtWrapper = styled.li`
  position: relative;
`;

export const ArtLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export const GalleryImageWrapper = styled.div``;

export const GalleryImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

export const CreatorImageWrapper = styled.div`
  width: 50px;
  height: 50px;
  min-width: 50px;
  min-height: 50px;
`;

export const CreatorImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`;

export const CreatorName = styled.span`
  display: block;
  margin-bottom: 6px;
  font-size: 14px;
`;

export const ArtName = styled.span`
  font-weight: bold;
`;

export const Creator = styled.div`
  display: flex;
  margin-top: 10px;
`;

export const Price = styled.span`
  font-weight: bold;
  font-size: 20px;
  margin-top: 10px;
  display: inline-block;
`;

export const Details = styled.div`
  margin-left: 10px;
  align-self: center;
`;

export const Status = styled.span`
  position: absolute;
  right: -5px;
  background: white;
  border-radius: 16px;
  padding: 5px 10px;
  top: -5px;
  color: white;
  font-weight: bold;
  background: ${props => props.theme.COLOR_PALETTE.RED};
`;
