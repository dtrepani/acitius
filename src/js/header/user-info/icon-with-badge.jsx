import React from 'react';

class HeaderIconWithBadge extends React.Component {
	render() {
		return (
			<div className={`icon ${this.props.name}`}>
				<i className={`fa fa-fw ${this.props.icon}`} aria-hidden="true"></i>
				<span className="badge badge-pill badge-primary">23</span>
			</div>
		);
	}
}

HeaderIconWithBadge.propTypes = {
	name: React.PropTypes.string.isRequired,
	icon: React.PropTypes.string.isRequired
};

module.exports = HeaderIconWithBadge;
