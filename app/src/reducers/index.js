const initial = {
  facts: [],
  isFetching: false,
}

export const reducer = (state = initial, action) => {
  switch(action.type) {
    case 'FETCH_START':
      return {
        ...state,
        isFetching: true,
      }
    case 'FETCH_API':
      return {
        ...state,
        isFetching: false,
        facts: action.payload
      }
    case 'TOGGLE_UPVOTE_FACT':
      return {
        ...state,
        facts: {
          ...state.facts,
          all: state.facts.all.map(fact => {
            if (fact._id === action.payload.id) {
              fact.upvotes += action.payload.change;
              if(action.payload.change > 0) {
                fact.upvoted = true;
              } else {
                fact.upvoted = false;
              }
              return {...fact}
            };
            return fact;
          })
        }
      }
    default: 
      return state;
  }
}