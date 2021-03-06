const initialState = {
  user: [],
  searchResult: [],
};

export const userReducer = (state = initialState, action) => {
  if (action.type === 'ADD_USER') {
    return Object.assign({}, state, {
      user: [...state.user, action.payload],
    });
  } else if (action.type === 'EDIT_USER') {
    return Object.assign({}, state, {
      user: state.user.map((each) => {
        if (each.email === action.payload.email) {
          return action.payload;
        }
        return each;
      }),
    });
  } else if (action.type === 'DELETE_USER') {
    const newArray = state.user.filter(
      (each, i) => each.name !== action.payload
    );
    return Object.assign({}, state, {
      user: newArray,
    });
  } else if (action.type === 'BULK_UPLOAD') {
    return Object.assign({}, state, {
      user: state.user.concat(action.payload),
    });
  } else if (action.type === 'SEARCH_USER') {
    const newArray = state.user.filter(
      (each, i) => each.name == action.payload
    );
    return Object.assign({}, state, {
      searchResult: newArray,
    });
  }

  return state;
};
