import todosConsts from '../../constants/actionTypes/fetchData/todos/todosConsts';

const todos = (state = {}, action) => {
  switch (action.type) {
    case todosConsts.TODOS_FETCH_REQUEST:
    case todosConsts.TODOS_FETCH_SUCCESS:
    case todosConsts.TODOS_FETCH_FAILURE: {
      return {
        ...state,
        data: action.data,
        error: action.error,
        isLoading: !action.error && !action.data
      };
    }

    default:
      return state;
  }
};

export default todos;
