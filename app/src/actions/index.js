import catFacts from '../apis/catFacts';

export const getAPI = () => async dispatch => {
  dispatch({ type: 'FETCH_START' });
  const res = await catFacts.get('/facts');
  dispatch({ type: 'FETCH_API', payload: res.data })
}

export const upvoteFact = (fact, change) => {
  return {
    type: 'TOGGLE_UPVOTE_FACT',
    payload: {
      id: fact._id,
      change: change,
    },
  }
}