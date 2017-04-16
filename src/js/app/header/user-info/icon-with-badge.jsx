import React from 'react';

class HeaderIconWithBadge extends React.Component {
	render() {
		return (
			<div className={`icon-badge-container ${this.props.name}`}>
				<i className={`${this.props.icon} icon`}></i>
				<div className="floating ui primary label">23</div>
			</div>
		);
	}
}

HeaderIconWithBadge.propTypes = {
	name: React.PropTypes.string.isRequired,
	icon: React.PropTypes.string.isRequired
};

export default HeaderIconWithBadge;
