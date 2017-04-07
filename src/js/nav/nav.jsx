import React from 'react';
import NavItem from './nav-item';
import NavItems from 'data/nav-items';

module.exports = class Nav extends React.Component {
	render() {
		return (
			<nav className="main-nav col-auto mr-md-4 ml-md-4" id="accordion" aria-multiselectable="true">
				{
					NavItems.map((item, index) =>
						<NavItem
							key={index}
							additionalClasses={item.additionalClasses}
							admin={item.admin}
							icon={item.icon}
							name={item.name}
							subNav={item.subNav} />
					)
				}

				<div className="ad ad-small-square"></div>
			</nav>
		);
	}
};
