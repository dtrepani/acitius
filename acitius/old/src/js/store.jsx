import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';
import rootReducer from './app/reducers.jsx';

export const configureStore = (initialState = {}) => {
	let middleware = applyMiddleware(ReduxThunk);

	if(process.env.NODE_ENV === 'development') {
		middleware = composeWithDevTools(middleware);
	}

	return createStore(rootReducer, initialState, middleware);
};
