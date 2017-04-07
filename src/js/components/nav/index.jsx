import React from 'react';
import NavItem from './nav-item';
import NavItems from 'data/nav-items';

export default class Nav extends React.PureComponent {
	render() {
		return (
			<nav className="main-nav col-auto mr-md-4 ml-md-4" id="accordion" aria-multiselectable="true">
				{
					NavItems.map((item, index) => <NavItem key={index} {...item} />)
				}

				<div className="ad ad-small-square"></div>
			</nav>
		);
	}
}
