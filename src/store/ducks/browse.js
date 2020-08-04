import { createActions, createReducer } from 'reduxsauce';

export const { Types, Creators } = createActions(
  {
    setList: ['data', 'list'],
    fetchBrowse: [],
    failure: ['err'],
    clearState: [],
  },
  {
    prefix: 'browse/',
  }
);

const initialState = {
  loading: false,
  error: false,
  isFetched: false,
  genres: [],
  recentlyPlayed: [],
  trending: [],
  mostPlayed: [],
  mostFollowed: [],
};

const setList = (state = initialState, action) => {
  if (action.list === 'recentlyPlayed') {
    return {
      ...state,
      recentlyPlayed: action.data,
      loading: false,
      isFetched: true,
    };
  }

  if (action.list === 'trending') {
    return {
      ...state,
      trending: action.data,
      loading: false,
      isFetched: true,
    };
  }

  if (action.list === 'genres') {
    return {
      ...state,
      genres: action.data,
      loading: false,
      isFetched: true,
    };
  }

  if (action.list === 'mostPlayed') {
    return {
      ...state,
      mostPlayed: action.data,
      loading: false,
      isFetched: true,
    };
  }

  if (action.list === 'mostFollowed') {
    return {
      ...state,
      mostFollowed: action.data,
      loading: false,
      isFetched: true,
    };
  }

  return state;
};

const fetchBrowse = (state = initialState) => ({
  ...state,
  loading: true,
});

const failure = (state = initialState) => ({
  ...state,
  loading: false,
});

const clearState = () => initialState;

export default createReducer(initialState, {
  [Types.SET_LIST]: setList,
  [Types.FETCH_BROWSE]: fetchBrowse,
  [Types.FAILURE]: failure,
  [Types.CLEAR_STATE]: clearState
});
