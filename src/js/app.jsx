import { createStore } from 'redux';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import rootReducer from './app/reducers.jsx';
import Routes from './app/routes';

const store = createStore(
	rootReducer,
	{ isClosed: false },
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
	(
		<Provider store={store}>
			<Routes />
		</Provider>
	),
	document.getElementById('app')
);
