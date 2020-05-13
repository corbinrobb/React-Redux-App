import catFacts from '../apis/catFacts';

export const getAPI = () => async dispatch => {
  const res = await catFacts.get('/facts').catch(err => console.log(err));
  
  dispatch({ type: 'FETCH_API', payload: res.data })
}

export const upvoteFact = (fact, change) => {
  return {
    type: 'UPVOTE_FACT',
    payload: {
      id: fact._id,
      change: change,
    },
  }
}