// libraries
import { put, takeLatest } from 'redux-saga/effects';
import get from 'lodash/get';

// utils
import FetchUtils from 'services/api';
import Notification from 'utils/notification';

// actions & types
import { ArtistTypes } from 'store/types';

import { setArtists } from 'store/actions/artistActions';

function* getArtists(): any {
  // show loader only the first
  const response = yield FetchUtils.getData('artist');

  if (!get(response, 'success')) {
    return Notification.handleApiToast({
      title: get(response, 'error') || 'Error fetching artists.',
    });
  }
  yield put(setArtists(get(response, 'data.artists')));
}

function* artistsWatcher() {
  yield takeLatest(ArtistTypes.GET_ARTISTS, getArtists);
}

export default artistsWatcher;
