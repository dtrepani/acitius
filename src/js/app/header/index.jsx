import React from 'react';
import HeaderBar from './header-bar';

export default class Header extends React.Component {
	render() {
		return (
			<header>
				<div className="header-banner ui grid computer only"></div>
				<HeaderBar />
			</header>
		);
	}
}
