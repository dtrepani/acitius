import React from 'react';
import HeaderBar from './header-bar';
import { Grid } from 'semantic-ui-react';

export default class Header extends React.Component {
	render() {
		return (
			<header>
				<Grid.Row className="header-banner" only="computer"></Grid.Row>
				<HeaderBar />
			</header>
		);
	}
}
