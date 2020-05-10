import axios from 'axios';

export const FETCH_API_START = 'FETCH_API_START';
export const FETCH_API_SUCCESS = 'FETCH_API_SUCCESS';
export const FETCH_API_FAILURE = 'FETCH_API_FAILURE';

export const getAPI = () => dispatch => {
  dispatch({ type: FETCH_API_START })
  axios
    .get('https://cat-fact.herokuapp.com/facts')
    .then(res => dispatch({ type: FETCH_API_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: FETCH_API_FAILURE, payload: err }))
}