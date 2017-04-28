import React from 'react';
import { Icon, Label } from 'semantic-ui-react';

export default class HeaderIconWithLabel extends React.Component {
	static propTypes = {
		name: React.PropTypes.string.isRequired,
		icon: React.PropTypes.string.isRequired
	};

	render() {
		return (
			<div className={`icon-badge-container ${this.props.name}`}>
				<Icon name={this.props.icon} />
				<Label floating className="primary">23</Label>
			</div>
		);
	}
};
