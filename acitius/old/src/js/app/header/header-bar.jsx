import React from 'react';
import HeaderUserInfo from './user-info/user-info';
import HeaderUtility from './utility/utility';
import { Grid, Menu, Row } from 'semantic-ui-react';

export default class HeaderBar extends React.Component {
	render() {
		return (
			<div className="header-container">
				<Grid className="sticky" padded>
					<Menu className="header-bar" attached="top">
						<HeaderUtility />
						<HeaderUserInfo />
					</Menu>
				</Grid>
			</div>
		);
	}
}
