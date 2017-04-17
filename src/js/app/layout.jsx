import React from 'react';
import Header from './header';
import Nav from './nav/components';
import Content from './content';
import Widgets from './widgets';
import Footer from './footer';
import { Grid } from 'semantic-ui-react';

export default class Layout extends React.Component {
	static propTypes = { children: React.PropTypes.object.isRequired };

	render() {
		return (
			<div>
				<Header />
				<Grid className="main-container" padded centered stretched>
					<Grid.Row>
						<Nav />
						<Content>
							{this.props.children}
						</Content>
						<Widgets />
					</Grid.Row>
				</Grid>
				<Footer />
			</div>
		);
	}
}
