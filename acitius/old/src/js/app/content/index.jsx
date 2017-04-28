import React from 'react';
import { Grid } from 'semantic-ui-react';

class Content extends React.Component {
	render() {
		return (
			<Grid.Column
				id="content-column"
				tablet="eleven"
				computer="eight"
			>
				<main
					id="content-container"
					className="ui segment">
					{this.props.children}
				</main>
			</Grid.Column>
		);
	}
}

Content.propTypes = { children: React.PropTypes.object.isRequired };

export default Content;
