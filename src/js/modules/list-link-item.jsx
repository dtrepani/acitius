import React from 'react';
import FormatString from 'js/modules/format-string';

class ListLinkItem extends React.Component {
	render() {
		const href = this.props.href
			? `/${this.props.href}`
			: FormatString.removeSpaces(this.props.name);

		return (
			<li className={this.props.liClass}>
				<a href={href} title={this.props.name} className={this.props.aClass}> {this.props.name} </a>
			</li>
		);
	}
}

ListLinkItem.propTypes = {
	name: React.PropTypes.string.isRequired,
	href: React.PropTypes.string,
	liClass: React.PropTypes.string,
	aClass: React.PropTypes.string
};

module.exports = ListLinkItem;
