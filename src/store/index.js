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
  SORT_DATA,
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
    case SORT_DATA: {
      const sortingMethod = state.sorting.sortBy;
      const sortingOrder = state.sorting.ascending;
      let orderedData = state.data.value;

      switch (sortingMethod) {
        case 'default':
          orderedData = sortingOrder
            ? [...orderedData].sort((a, b) => a.id - b.id)
            : [...orderedData].sort((a, b) => b.id - a.id);
          break;
        case 'income':
          orderedData = sortingOrder
            ? [...orderedData].sort((a, b) => a.salary - b.salary)
            : [...orderedData].sort((a, b) => b.salary - a.salary);
          break;
        case 'industry':
           orderedData = [...orderedData].sort((a, b) => {
            if (a.industry === b.industry) {
              return 0;
            }
            if (a.industry === null) {
              return 1;
            }
            if (b.industry === null) {
              return -1;
            }
            if (a.industry === 'n/a') {
              return 1;
            }
            if (b.industry ===  'n/a') {
              return -1;
            }
            return sortingOrder
            ? (a.industry || '').localeCompare(b.industry || '') : (b.industry || '').localeCompare(a.industry || '');
           })
          break;
        case 'date':
          orderedData = [...orderedData].sort((a, b) => {
            // if (a.date === b.date) {
            //   return 0;
            // }
            // if (a.date === null) {
            //   return 1;
            // }
            // if (b.date === null) {
            //   return -1;
            // }
            const aDate = a.date_of_birth.split('/');
            const aDateNew = new Date(aDate[2], aDate[1], aDate[0]);

            const bDate = b.date_of_birth.split('/');
            const bDateNew = new Date(bDate[2], bDate[1], bDate[0]);

            return sortingOrder
              ? aDateNew.getTime() - bDateNew.getTime()
              : bDateNew.getTime() - aDateNew.getTime();
          });
          break;
        default:
          break;
      }

      return {
        ...state,
        data: {
          ...state.data,
          value: orderedData,
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
