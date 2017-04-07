import React from 'react';
import HeaderBar from './header-bar';

module.exports = class Header extends React.Component {
	render() {
		return (
			<header>
				<div className="header-banner hidden-md-down"></div>
				<HeaderBar />
			</header>
		);
	}
};
