import React from 'react';
import { Link } from 'react-router-dom';
import FormatString from 'js/modules/format-string';
import SubNav from './sub-nav';

class NavItem extends React.Component {
	_renderDropdown() {
		if(!this._hasSubNav()) return null;
		return <i className="fa fa-fw fa-angle-right" aria-hidden="true"></i>;
	}

	_hasSubNav() {
		return (this.props.subNav.length > 0);
	}

	render() {
		const nameWithDashes = FormatString.spacesToDashes(this.props.name);
		const subName = `sub-${nameWithDashes}`;
		const href = this._hasSubNav() ? `#${subName}` : nameWithDashes;
		const hasSubNav = (this.props.subNav.length > 0);
		const additionalProps = (
			hasSubNav
			? {
				'aria-controls': subName,
				'aria-expanded': 'false',
				'data-parent': '#accordion',
				'data-toggle': 'collapse'
			}
			: {}
		);

		return (
			<div className={`card ${this.props.classes}`}>
				<div className="card-header" role="tab">
					<Link
						to={href}
						id={nameWithDashes}
						title={this.props.name}
						{...additionalProps}>
						<i className={`fa fa-fw ${this.props.icon}`} aria-hidden="true"></i>
						{this.props.name}
						{hasSubNav && <i className="fa fa-fw fa-angle-right" aria-hidden="true"></i>}
					</Link>
				</div>
				{hasSubNav && <SubNav name={subName} labelledBy={nameWithDashes} subNav={this.props.subNav} />}
			</div>
		);
	}
}

NavItem.defaultProps = {
	classes: '',
	admin: false,
	subNav: []
};

NavItem.propTypes = {
	classes: React.PropTypes.string,
	admin: React.PropTypes.bool,
	name: React.PropTypes.string.isRequired,
	icon: React.PropTypes.string.isRequired,
	subNav: React.PropTypes.array
};

export default NavItem;
