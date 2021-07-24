import styled from 'styled-components';

export const ArtWrapper = styled.div`
  margin-top: 20px;
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
`;

export const ArtImageWrapper = styled.div`
  width: 500px;
  height: 400px;
  margin: 50px 100px 0;
`;

export const CreatedBy = styled.h2`
  font-weight: bold;
  font-size: 30px;
  margin-bottom: 20px;
  text-decoration: underline;
`;

export const Description = styled.p`
  font-size: 16px;
  margin-bottom: 50px;
  line-height: 1.2;
`;

export const Price = styled.span`
  font-size: 26px;
  font-weight: bold;
`;

export const ArtImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

export const ArtDetails = styled.div`
  max-width: 500px;
  flex: 1;
  margin-top: 50px;
`;

export const NotArtFound = styled.h2`
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
`;
