import React from 'react';
import { Icon } from 'semantic-ui-react';

export default class ToggleNav extends React.Component {
	static propTypes = { onToggleClick: React.PropTypes.func.isRequired };

	shouldComponentUpdate() {
		return false;
	}

	render() {
		return (
			<div className="toggle-nav" onClick={this.props.onToggleClick}>
				<Icon name="content" link />
			</div>
		);
	}
}
