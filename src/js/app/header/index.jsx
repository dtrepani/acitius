import React from 'react';
import HeaderBar from './header-bar';

export default class Header extends React.Component {
	render() {
		return (
			<header>
				<div className="header-banner hidden-md-down"></div>
				<HeaderBar />
			</header>
		);
	}
}
