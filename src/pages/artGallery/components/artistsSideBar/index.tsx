import Input from 'elements/input';
import { filter, get, map, toLower } from 'lodash';
import React, { useState } from 'react';
import {
  ArtistSideBarWrapper,
  Creator,
  CreatorImageWrapper,
  CreatorImage,
  CreatorName,
  Heading,
  NoDataText,
} from './styles';

import { RiSearchLine } from 'react-icons/ri';

type Props = {
  artistsData: any[];
};

const ArtistSideBar: React.FunctionComponent<Props> = ({ artistsData }) => {
  const [value, setValue] = useState('');

  const filteredData = filter(artistsData, eachArtist => {
    const text = toLower(eachArtist.name);
    return text.includes(toLower(value));
  });

  return (
    <ArtistSideBarWrapper>
      <Heading>Artists</Heading>
      <Input
        placeholder={`Search from ${(artistsData || []).length} creators`}
        icon={<RiSearchLine />}
        handleChange={e => {
          setValue(e.target.value);
        }}
      />
      {!!value && !filteredData.length && (
        <NoDataText>No Artist matches your search</NoDataText>
      )}
      {map(filteredData, eachItem => {
        return (
          <Creator key={eachItem._id}>
            <CreatorImageWrapper>
              <CreatorImage src={eachItem.imageUrl} />
            </CreatorImageWrapper>
            <CreatorName>{get(eachItem, `name`)}</CreatorName>
          </Creator>
        );
      })}
    </ArtistSideBarWrapper>
  );
};

export default ArtistSideBar;
