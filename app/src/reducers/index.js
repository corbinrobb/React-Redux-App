import { FETCH_API_START, FETCH_API_SUCCESS, FETCH_API_FAILURE } from '../actions';

const initial = {
  facts: [],
  error: '',
  isFetching: false
}

export const reducer = (state = initial, action) => {
  switch(action.type) {
    case FETCH_API_START:
      return {
        ...state,
        isFetching: true,
        error: ''
      }
    case FETCH_API_SUCCESS:
      return {
        ...state,
        facts: action.payload,
        isFetching: false,
        error: ''
      }
    case FETCH_API_FAILURE:
      return {
        ...state,
        error: action.payload
      }
    default: 
      return state;
  }
}