import React from 'react';
import HeaderCurrency from './currency';
import HeaderIconWithBadge from './icon-with-badge';
import HeaderUser from './user';

export default class HeaderUserInfo extends React.Component {
	render() {
		return (
			<div className="user-info-container right menu">
				<HeaderCurrency />
				<HeaderIconWithBadge name="notifications" icon="bell" />
				<HeaderIconWithBadge name="mail" icon="envelope" />
				<HeaderUser />
			</div>
		);
	}
}
