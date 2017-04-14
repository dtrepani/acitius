import React from 'react';

export default class HeaderUser extends React.Component {
	render() {
		return (
			<div className="user">
				<div className="avatar">
					<img src="/images/avatar-default.png" />
				</div>
				<span className="username hidden-md-down" data-hover="User">User</span>
				<i className="fa fa-fw fa-angle-down" aria-hidden="true"></i>
			</div>
		);
	}
}
