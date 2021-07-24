// libraries
import { put, takeLatest } from 'redux-saga/effects';
import get from 'lodash/get';

// utils
import FetchUtils from 'services/api';
import Notification from 'utils/notification';

// actions & types
import { ArtTypes } from 'store/types';

import { setArtDetails, setArts, setLoading } from 'store/actions/artsActions';

function* getArts({ sort, status }: any): any {
  yield put(setLoading(true));
  let statusParam = '';

  if (status) {
    statusParam = `&status=${status}`;
  }
  const response = yield FetchUtils.getData(`art?sort=${sort}${statusParam}`);
  yield put(setLoading(false));

  if (!get(response, 'success')) {
    return Notification.handleApiToast({
      title: get(response, 'error') || 'Error fetching arts.',
    });
  }
  yield put(setArts(get(response, 'data.arts')));
}

function* getSingleArt({ artId }: any): any {
  yield put(setLoading(true));

  const response = yield FetchUtils.getData(`art/${artId}`);
  yield put(setLoading(false));

  if (!get(response, 'success')) {
    yield put(setArtDetails({}));
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
