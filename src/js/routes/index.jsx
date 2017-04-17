import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from 'js/app/layout';
import Home from './home';
import Login from './login';
import News from './news';
import NotFound from './not-found';

export default class Routes extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<Layout>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/login" component={Login} />

						<Route exact path="/news" component={News} />

						<Route path="*" component={NotFound} status={404} />
					</Switch>
				</Layout>
			</BrowserRouter>
		);
	}
}
