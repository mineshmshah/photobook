import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
// import { rootReducer } from 'store/reducers';
// import { initialState } from './initialState';
import {
  GET_DATA_REQUEST,
  GET_DATA_SUCCESS,
  GET_DATA_FAILURE,
  UPDATE_SORT_METHOD,
  UPDATE_SORT_ORDER,
  FILTER_RESULTS,
} from './actions/types';

const initialState = {
  data: {
    loading: false,
    error: null,
    value: [],
  },
  sorting: {
    sortBy: 'default',
    ascending: true,
  },
  filter: {
    firstName: '',
    lastName: '',
    filteredData: [],
  },
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA_REQUEST:
      return {
        ...state,
        data: {
          loading: true,
          error: null,
          value: [],
        },
      };
    case GET_DATA_SUCCESS:
      return {
        ...state,
        data: {
          loading: false,
          error: null,
          value: action.payload,
        },
        filter: {
          firstName: '',
          lastName: '',
        },
      };
    case GET_DATA_FAILURE:
      return {
        ...state,
        data: {
          loading: false,
          error: action.error,
          value: [],
        },
      };
    case FILTER_RESULTS: {
      return {
        ...state,
        filter: {
          firstName: action.firstName,
          lastName: action.lastName,
        },
      };
    }
    case UPDATE_SORT_METHOD:
      return {
        ...state,
        sorting: {
          ...state.sorting,
          sortBy: action.payload,
        },
      };
    case UPDATE_SORT_ORDER:
      return {
        ...state,
        sorting: {
          ...state.sorting,
          ascending: action.payload,
        },
      };
    default:
      return state;
  }
};

export const configureStore = () => {
  const enhancer = [applyMiddleware(thunk)];
  const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools({
      name: 'Yobota-app',
      trace: true,
    })(...enhancer),
  );

  return store;
};
