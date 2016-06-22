import * as actions from '../constants/ActionTypes'

const initialState = {
  items: [],
  isFetching: false,
  errorMessage: null
};

const export default todos = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_TODOS_REQUEST:
      return {...state, isFetching: true};
    case types.FETCH_TODOS_SUCCESS:
      return {
        ...state,
        items: [...action.response.entities.entries],
        isFetching: false
      };
    case types.FETCH_TODOS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.message
      };
    default:
      return state;
  }
};
