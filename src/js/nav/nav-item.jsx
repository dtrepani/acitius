import React from 'react';
import FormatString from 'js/modules/format-string';
import ListLinkItem from 'js/modules/list-link-item';

class NavItem extends React.Component {
	_generateDropdown() {
		if(!this._hasSubNav()) return null;
		return <i className="fa fa-fw fa-angle-right" aria-hidden="true"></i>;
	}

	_generateSubNav(subName, nameWithDashes) {
		if(!this._hasSubNav()) return null;

		return (
			<ul id={subName}
					className="card-block collapse"
					role="tabpanel"
					aria-labelledby={nameWithDashes}>
				{ this.props.subNav.map((item, index) => <ListLinkItem key={index} name={item} />) }
			</ul>
		);
	}

	_hasSubNav() {
		return (this.props.subNav.length > 0);
	}

	render() {
		const nameWithDashes = FormatString.spacesToDashes(this.props.name);
		const subName = `sub-${nameWithDashes}`;
		const href = this._hasSubNav() ? `#${subName}` : nameWithDashes;

		return (
			<div className={`card ${this.props.additionalClasses}`}>
				<div className="card-header" role="tab">
					<a
						aria-controls={subName}
						aria-expanded="false"
						data-parent="#accordion"
						data-toggle="collapse"
						href={href}
						id={nameWithDashes}
						title={this.props.name}>
						<i className={`fa fa-fw ${this.props.icon}`} aria-hidden="true"></i>
						{this.props.name}
						{this._generateDropdown()}
					</a>
				</div>
				{this._generateSubNav(subName, nameWithDashes)}
			</div>
		);
	}
}

NavItem.propTypes = {
	additionalClasses: React.PropTypes.string,
	admin: React.PropTypes.bool,
	name: React.PropTypes.string.isRequired,
	icon: React.PropTypes.string.isRequired,
	subNav: React.PropTypes.array
};

NavItem.defaultProps = {
	additionalClasses: '',
	admin: false,
	subNav: []
};

module.exports = NavItem;
