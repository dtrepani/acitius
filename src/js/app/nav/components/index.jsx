import React from 'react';
import { connect } from 'react-redux';
import NavItem from './nav-item';
import NavItems from 'data/nav-items';
import { Accordion, Grid, Segment } from 'semantic-ui-react';

export default class Nav extends React.Component {
	shouldComponentUpdate() {
		return false;
	}

	render() {
		return (
			<Grid.Column
				id="main-nav-container"
				tablet="five"
				computer="four"
			>
				<Segment>
					<div className="ui sticky sides">
						<nav className="main-nav">
							<Accordion fluid>
								{ NavItems.map((item, index) => <NavItem key={index} {...item} />) }
							</Accordion>

							<div
								className="ui centered small square test ad"
								data-text="Small Square"></div>
						</nav>
					</div>
				</Segment>
			</Grid.Column>
		);
	}
};
