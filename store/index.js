import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers';

export const defaultState = {
  todos: {
    data: null,
    isLoading: false
  }
};

export function initializeStore(initialState = defaultState) {
  return createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  );
}
