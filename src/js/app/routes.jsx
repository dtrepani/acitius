import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from './layout';
import Home from 'js/home';
import News from 'js/news';
import NotFound from 'js/not-found';

export default class Routes extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<Layout>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/news" component={News} />

						<Route path="*" component={NotFound} status={404} />
					</Switch>
				</Layout>
			</BrowserRouter>
		);
	}
}
