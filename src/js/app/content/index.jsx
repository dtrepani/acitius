import React from 'react';

class Content extends React.Component {
	render() {
		return (
			<div
				id="content-column"
				className="eleven wide tablet eight wide computer column"
			>
				<main
					id="content-container"
					className="ui segment">
					{this.props.children}
				</main>
			</div>
		);
	}
}

Content.propTypes = { children: React.PropTypes.object.isRequired };

export default Content;
