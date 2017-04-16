import React from 'react';

export default class HeaderUser extends React.Component {
	render() {
		return (
			<div className="user">
				<img className="ui avatar image" src="/images/avatar-default.png" />
				<span className="username">User</span>
				<i className="angle down icon"></i>
			</div>
		);
	}
}
