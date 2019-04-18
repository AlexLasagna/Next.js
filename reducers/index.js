import { combineReducers } from 'redux';

// reducers
import todos from './todos';

const RootReducer = combineReducers({
  todos
});

export default RootReducer;
