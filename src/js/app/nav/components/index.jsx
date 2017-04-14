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

let Nav = ({ isClosed }) => {
	return (
		<nav
			className={`main-nav col-auto mr-md-4 ml-md-4 ${isClosed ? 'nav-closed' : ''}`}
			id="accordion"
			aria-multiselectable="true"
		>
			{ NavItems.map((item, index) => <NavItem key={index} {...item} />) }
			<div className="ad ad-small-square"></div>
		</nav>
	);
};

Nav.propTypes = { isClosed: React.PropTypes.bool.isRequired };

const mapStateToProps = (state = { isClosed: false }) => {
	return { isClosed: state.isClosed };
};

Nav = connect(mapStateToProps)(Nav);

export default Nav;
