import {
  GET_DATA_REQUEST,
  GET_DATA_SUCCESS,
  GET_DATA_FAILURE,
  UPDATE_SORT_METHOD,
  UPDATE_SORT_ORDER,
  SORT_DATA,
} from './types';

export const getDataRequest = () => ({
  type: GET_DATA_REQUEST,
});

export const getDataSuccess = (data) => ({
  type: GET_DATA_SUCCESS,
  payload: data,
});

export const getDataFailiure = (error) => ({
  type: GET_DATA_FAILURE,
  error,
});

export const getData = () => (dispatch) => {
  // eslint-disable-next-line no-console
  dispatch(getDataRequest());
  return fetch('/api/data')
    .then((response) => response.json())
    .then((data) => dispatch(getDataSuccess(data)))
    .catch((err) => dispatch(getDataFailiure(err)));
};

export const updateSortBy = (payload) => ({
  type: UPDATE_SORT_METHOD,
  payload,
});

export const updateSortOrder = (payload) => ({
  type: UPDATE_SORT_ORDER,
  payload,
});

export const sortData = () => ({
  type: SORT_DATA,
});
