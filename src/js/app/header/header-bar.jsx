import React from 'react';
import HeaderUserInfo from './user-info/user-info';
import HeaderUtility from './utility/utility';

export default class HeaderBar extends React.Component {
	render() {
		return (
			<div className="header-container">
				<div className="ui padded grid sticky">
					<div className="header row ui top menu">
						<HeaderUtility />
						<HeaderUserInfo />
					</div>
				</div>
			</div>
		);
	}
}
