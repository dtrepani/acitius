import React from 'react';
import { Link } from 'react-router-dom';
import FormatString from 'js/modules/format-string';
import SubNav from './sub-nav';

class NavItem extends React.Component {
	_onLinkClick(e) {
		e.preventDefault();
		// TODO: fix hack
		setTimeout(() => {
			$('#main-nav-container .ui.sticky').sticky('refresh');
		}, 300);
	}

	render() {
		const nameWithDashes = FormatString.spacesToDashes(this.props.name);
		const subName = `sub-${nameWithDashes}`;
		const hasSubNav = (this.props.subNav.length > 0);

		return (
			<div className={`item ${this.props.classes}`}>
				<Link
					className="title"
					to={hasSubNav ? '#' : nameWithDashes}
					id={nameWithDashes}
					title={this.props.name}
					onClick={this._onLinkClick}
				>
					<i className={`${this.props.icon} icon`}></i>
					{this.props.name}
					{hasSubNav && (
						<div className="subnav indicator">
							<i className="subnav angle right icon"></i>
						</div>
					)}
				</Link>
				{hasSubNav && <SubNav name={subName} subNav={this.props.subNav} />}
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
