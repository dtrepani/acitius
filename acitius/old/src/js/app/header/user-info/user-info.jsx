import React from 'react';
import HeaderCurrency from './currency';
import HeaderIconWithBadge from './icon-with-label';
import HeaderUser from './user';
import { Menu } from 'semantic-ui-react';

export default class HeaderUserInfo extends React.Component {
	render() {
		return (
			<Menu.Menu className="user-info-container" position="right">
				<HeaderCurrency />
				<HeaderIconWithBadge name="notifications" icon="bell" />
				<HeaderIconWithBadge name="mail" icon="envelope" />
				<HeaderUser />
			</Menu.Menu>
		);
	}
}
