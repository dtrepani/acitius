import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from 'js/components/layout';
import Home from 'js/routes/home';
import News from 'js/routes/news';
import NotFound from 'js/routes/not-found';

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
