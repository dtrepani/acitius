import React from 'react';
import { Link } from 'react-router-dom';
import ToggleNav from './containers/toggle-nav-container';

export default class HeaderUtility extends React.Component {
	render() {
		return (
			<div className="utility-container col-md-5 col">
				<ToggleNav />
				<h1 className="logo"><Link to="/">acitius</Link></h1>
				<form className="search">
					<input type="text" placeholder="Search" />
					<button type="submit">
						<i className="fa fa-fw fa-search" aria-hidden="true"></i>
					</button>
				</form>
			</div>
		);
	}
}
