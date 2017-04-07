import React from 'react';
import { Link } from 'react-router-dom';

export default class HeaderUtility extends React.Component {
	render() {
		return (
			<div className="utility-container col-md-5 col">
				<div className="toggle-nav">
					<i className="fa fa-bars hidden-md-up" aria-hidden="true"></i>
				</div>
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
