import React from 'react';
import HeaderCurrency from './currency';
import HeaderIconWithBadge from './icon-with-badge';
import HeaderUser from './user';

module.exports = class HeaderUserInfo extends React.Component {
	render() {
		return (
			<div className="user-info-container col-md-7 col">
				<HeaderCurrency />
				<HeaderIconWithBadge name="notifications" icon="fa-bell" />
				<HeaderIconWithBadge name="mail" icon="fa-envelope" />
				<HeaderUser />
			</div>
		);
	}
};
