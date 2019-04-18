import todosConsts from '../../constants/actionTypes/fetchData/todos/todosConsts';

import { todosFetch } from '../../api/todos';

const {
  TODOS_FETCH_REQUEST,
  TODOS_FETCH_SUCCESS,
  TODOS_FETCH_FAILURE
} = todosConsts;

export const getTodos = () => dispatch => {
  dispatch({ type: TODOS_FETCH_REQUEST });

  todosFetch()
    .then(data => {
      dispatch({ type: TODOS_FETCH_SUCCESS, data: data.data });
    })
    .catch(error => {
      dispatch({ type: TODOS_FETCH_FAILURE, error: error.message });
    });
};
