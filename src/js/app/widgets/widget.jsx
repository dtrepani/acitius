import React from 'react';
import FormatString from 'js/modules/format-string';

class Widget extends React.Component {
	render() {
		const name = FormatString.spacesToDashes(this.props.name);

		return (
			<div className={`widget widget-${name}`}>
				<h2>
					<i className={`${this.props.icon} icon`} aria-hidden="true"></i>
					{this.props.name}
					<i className="pin icon"></i>
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
