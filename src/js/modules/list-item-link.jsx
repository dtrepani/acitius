import React from 'react';
import { Link } from 'react-router-dom';
import FormatString from 'js/modules/format-string';

export default class ListItemLink extends React.Component {
	static propTypes = {
		name: React.PropTypes.string.isRequired,
		href: React.PropTypes.string,
		liClass: React.PropTypes.string,
		aClass: React.PropTypes.string
	};

	shouldComponentUpdate() {
		return false;
	}

	render() {
		const href = this.props.href
			? `/${this.props.href}`
			: FormatString.removeSpaces(this.props.name);

		return (
			<li className={this.props.liClass}>
				<Link to={href} title={this.props.name} className={this.props.aClass}> {this.props.name} </Link>
			</li>
		);
	}
}
