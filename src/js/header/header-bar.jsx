import React from 'react';
import HeaderUserInfo from './user-info/user-info';
import HeaderUtility from './utility/utility';

module.exports = class HeaderBar extends React.Component {
	render() {
		return (
			<div className="header container">
				<div className="row no-gutters">
					<HeaderUtility />
					<HeaderUserInfo />
				</div>
			</div>
		);
	}
};
