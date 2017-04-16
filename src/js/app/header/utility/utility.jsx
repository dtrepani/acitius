import React from 'react';
import { Link } from 'react-router-dom';
import ToggleNav from './containers/toggle-nav-container';

export default class HeaderUtility extends React.Component {
	render() {
		return (
			<div className="utility-container left menu">
				<ToggleNav />
				<h1 className="logo"><Link to="/">acitius</Link></h1>
				<div className="search-header ui search">
					<div className="ui icon input">
						<input className="prompt" type="text" placeholder="Search" />
						<i className="search link icon"></i>
					</div>
					<div className="results"></div>
				</div>
			</div>
		);
	}
}
