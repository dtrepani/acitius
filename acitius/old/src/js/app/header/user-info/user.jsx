import React from 'react';
import { Dropdown, Image, Icon } from 'semantic-ui-react';

export default class HeaderUser extends React.Component {
	render() {
		return (
			<div className="ui dropdown user">
				<Image avatar src="/images/avatar-default.png" />
				<span className="username">User</span>
				<Icon name="angle down" />
				<Dropdown.Menu>
					<Dropdown.Item text="Settings" icon="setting" />
					<Dropdown.Item text="Logout" icon="log out" />
				</Dropdown.Menu>
			</div>
		);
	}
}
