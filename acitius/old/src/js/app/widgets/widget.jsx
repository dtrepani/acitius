import React from 'react';
import FormatString from 'js/modules/format-string';
import { Icon } from 'semantic-ui-react';

class Widget extends React.Component {
	render() {
		const name = FormatString.spacesToDashes(this.props.name);

		return (
			<div className={`widget widget-${name}`}>
				<h2>
					<Icon name={this.props.icon} />
					{this.props.name}
					<Icon name="pin" />
				</h2>
				{this.props.children}
			</div>
		);
	}
}

Widget.propTypes = {
	name: React.PropTypes.string.isRequired,
	icon: React.PropTypes.string.isRequired,
	children: React.PropTypes.element.isRequired
};

export default Widget;
