import { put, call, all, takeLatest } from 'redux-saga/effects';

import {
  Types as PlayerTypes,
  Creators as PlayerActions,
} from '../ducks/player';

import api from '../../services/api';

const { successPlaylist } = PlayerActions;

function* fetchPlaylist({ playlistId, playlistType }) {
  try {
    const response = yield call(
      api.get,
      `/app/${playlistType}/${playlistId}/tracks`,
      {
        params: {
          limit: 100,
          page: 1,
        },
      }
    );

    const playlist = yield call(api.get, `/app/${playlistType}/${playlistId}`);

    let name;
    if (playlist.data.playlist) {
      name = playlist.data.playlist.name;
    }

    if (playlist.data.artist) {
      name = playlist.data.artist.name;
    }

    if (playlist.data.genre) {
      name = playlist.data.genre.name;
    }

    if (playlist.data.album) {
      name = playlist.data.album.name;
    }

    yield put(
      successPlaylist({
        id: playlistId,
        name,
        tracks: response.data.tracks,
        total: response.data.meta.total,
        page: response.data.meta.page,
      })
    );
  } catch (err) {
    console.log(err);
  }
}

export default function* playerSaga() {
  yield all([takeLatest(PlayerTypes.FETCH_PLAYLIST, fetchPlaylist)]);
}
