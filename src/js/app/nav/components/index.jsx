import React from 'react';
import { connect } from 'react-redux';
import NavItem from './nav-item';
import NavItems from 'data/nav-items';

/* class Nav extends React.PureComponent {
	render() {
		return (
			<nav
				className={`main-nav col-auto mr-md-4 ml-md-4 ${this.props.isClosed ? 'nav-closed' : ''}`}
				id="accordion"
				aria-multiselectable="true"
			>
				{ NavItems.map((item, index) => <NavItem key={index} {...item} />) }
				<div className="ad ad-small-square"></div>
			</nav>
		);
	}
}*/

const Nav = () => {
	return (
		<div
			id="main-nav-container"
			className="five wide tablet four wide computer column"
		>
			<div className="ui segment">
				<div className="ui sticky sides">
					<nav className="main-nav">
						<div className="ui fluid accordion">
							{ NavItems.map((item, index) => <NavItem key={index} {...item} />) }
						</div>

						<div
							className="ui centered small square test ad"
							data-text="Small Square"></div>
					</nav>
				</div>
			</div>
		</div>
	);
};

export default Nav;
