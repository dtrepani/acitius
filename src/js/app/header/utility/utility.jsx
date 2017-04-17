import React from 'react';
import { Link } from 'react-router-dom';
import ToggleNav from './containers/toggle-nav-container';
import { Icon, Menu, Search } from 'semantic-ui-react';

export default class HeaderUtility extends React.Component {
	shouldComponentUpdate() {
		return false;
	}

	render() {
		return (
			<Menu className="utility-container left" secondary>
				<ToggleNav />
				<h1 className="logo"><Link to="/">acitius</Link></h1>
				<Search
					className="search-header"
					icon={<Icon name="search" link />}
					placeholder="Search"
					showNoResults={false} />
			</Menu>
		);
	}
}
