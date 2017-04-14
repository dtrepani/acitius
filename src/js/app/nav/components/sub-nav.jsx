import React from 'react';
import ListItemLink from 'js/modules/list-item-link';

class SubNav extends React.Component {
	render() {
		return (
			<ul id={this.props.name}
					className="card-block collapse"
					role="tabpanel"
					aria-labelledby={this.props.labelledBy}>
				{ this.props.subNav.map((item, index) => <ListItemLink key={index} name={item} />) }
			</ul>
		);
	}
}

SubNav.propTypes = {
	name: React.PropTypes.string.isRequired,
	labelledBy: React.PropTypes.string.isRequired,
	subNav: React.PropTypes.array.isRequired
};

export default SubNav;
