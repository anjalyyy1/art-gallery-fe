// libraries
import { put, takeLatest } from 'redux-saga/effects';
import get from 'lodash/get';

// utils
import FetchUtils from 'services/api';
import Notification from 'utils/notification';

// actions & types
import { ArtTypes } from 'store/types';

import { setArts, setArtDetails } from 'store/actions/artsActions';

function* getArts({ sort, status }: any): any {
  let statusParam = '';

  if (status) {
    statusParam = `&status=${status}`;
  }
  const response = yield FetchUtils.getData(`art?sort=${sort}${statusParam}`);

  if (!get(response, 'success')) {
    return Notification.handleApiToast({
      title: get(response, 'error') || 'Error fetching arts.',
    });
  }
  yield put(setArts(get(response, 'data.arts')));
}

function* getSingleArt({ artId }: any): any {
  const response = yield FetchUtils.getData(`art/${artId}`);

  if (!get(response, 'success')) {
    return Notification.handleApiToast({
      title: get(response, 'error') || 'Error fetching art.',
    });
  }
  yield put(setArtDetails(get(response, 'data.art')));
}

function* artistsWatcher() {
  yield takeLatest(ArtTypes.GET_ARTS, getArts);
  yield takeLatest(ArtTypes.GET_ART, getSingleArt);
}

export default artistsWatcher;
