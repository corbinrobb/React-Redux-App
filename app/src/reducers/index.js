const initial = {
  facts: [],
}

export const reducer = (state = initial, action) => {
  switch(action.type) {
    case 'FETCH_API':
      return {
        ...state,
        facts: action.payload
      }
      case 'UPVOTE_FACT':
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
              };
              return {...fact};
            })
          }
          
        }
    default: 
      return state;
  }
}