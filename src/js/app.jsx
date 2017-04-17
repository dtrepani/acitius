import { configureStore } from './store';
import { Provider } from 'react-redux';
import { whyDidYouUpdate } from 'why-did-you-update';
import Perf from 'react-addons-perf';
import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';

const store = configureStore();

if(process.env.NODE_ENV === 'development') {
	window.Perf = Perf;
	// whyDidYouUpdate(React);
}

ReactDOM.render(
	(
		<Provider store={store}>
			<Routes />
		</Provider>
	),
	document.getElementById('app')
);
