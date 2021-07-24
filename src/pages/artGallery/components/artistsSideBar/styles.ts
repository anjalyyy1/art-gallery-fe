import styled from 'styled-components';

export const ArtistSideBarWrapper = styled.div`
  input {
    border: 1px solid transparent;
  }

  .input-wrapper {
    margin-bottom: 12px;
  }

  svg {
    vertical-align: middle;
    font-size: 20px;
    margin-right: 7px;
  }
`;

export const Creator = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const CreatorImageWrapper = styled.div`
  width: 40px;
  height: 40px;
  margin-right: 15px;
`;

export const CreatorImage = styled.img`
  border-radius: 50%;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const CreatorName = styled.span`
  font-weight: bold;
`;

export const Heading = styled.h4`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const NoDataText = styled.span`
  font-size: 10px;
  color: red;
  width: 90%;
  margin: 0 auto;
`;
