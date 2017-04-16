import React from 'react';
import ListItemLink from 'js/modules/list-item-link';

class SubNav extends React.Component {
	render() {
		return (
			<div className="content">
				<ul id={this.props.name} className="transition hidden">
					{ this.props.subNav.map((item, index) => <ListItemLink key={index} name={item} />) }
				</ul>
			</div>
		);
	}
}

SubNav.propTypes = {
	name: React.PropTypes.string.isRequired,
	subNav: React.PropTypes.array.isRequired
};

export default SubNav;
