import React from 'react';
import ListItemLink from 'js/modules/list-item-link';
import { Item } from 'semantic-ui-react';

class SubNav extends React.Component {
	shouldComponentUpdate() {
		return false;
	}

	render() {
		return (
			<Item.Content>
				<ul id={this.props.name} className="transition hidden">
					{ this.props.subNav.map((item, index) => <ListItemLink key={index} name={item} />) }
				</ul>
			</Item.Content>
		);
	}
}

SubNav.propTypes = {
	name: React.PropTypes.string.isRequired,
	subNav: React.PropTypes.array.isRequired
};

export default SubNav;
