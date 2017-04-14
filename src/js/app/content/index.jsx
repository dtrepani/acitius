import React from 'react';

class Content extends React.Component {
	render() {
		return (
			<main className="col mr-md-4">
				{this.props.children}
			</main>
		);
	}
}

Content.propTypes = { children: React.PropTypes.object.isRequired };

export default Content;
