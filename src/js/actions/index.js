import * as api from 'path/to/api';
import * as types from '../constants/ActionTypes'

export const fetchTodos = (dispatch) => {
  dispatch({
    type: types.FETCH_TODOS_REQUEST,
  });
  return api.fetchTodos().then(
    response => {
      dispatch({
        type: types.FETCH_TODOS_SUCCESS,
        response
      });
    },
    error => {
      dispatch({
        type: types.FETCH_TODOS_FAILIRE,
        message: error.message || 'Something went wrong.'
      });
    })
};
