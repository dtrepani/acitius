import React from 'react';
import { Link } from 'react-router-dom';
import FormatString from 'js/modules/format-string';
import SubNav from './sub-nav';
import { Icon, Item } from 'semantic-ui-react';

export default class NavItem extends React.Component {
	static defaultProps = {
		classes: '',
		admin: false,
		subNav: []
	};

	static propTypes = {
		classes: React.PropTypes.string,
		admin: React.PropTypes.bool,
		name: React.PropTypes.string.isRequired,
		icon: React.PropTypes.string.isRequired,
		subNav: React.PropTypes.array
	};

	_onLinkClick(e) {
		// TODO: fix hack
		setTimeout(() => {
			$('.ui.sticky.sides').sticky('refresh');
		}, 300);
	}

	shouldComponentUpdate() {
		return false;
	}

	render() {
		const nameWithDashes = FormatString.spacesToDashes(this.props.name);
		const subName = `sub-${nameWithDashes}`;
		const hasSubNav = (this.props.subNav.length > 0);

		return (
			<Item className={this.props.classes}>
				<Link
					className="title"
					to={hasSubNav ? '#' : nameWithDashes}
					id={nameWithDashes}
					title={this.props.name}
					onClick={this._onLinkClick}
				>
					<Icon name={this.props.icon} />
					{this.props.name}
					{hasSubNav && (
						<div className="subnav indicator">
							<Icon className="subnav" name="angle right" />
						</div>
					)}
				</Link>
				{hasSubNav && <SubNav name={subName} subNav={this.props.subNav} />}
			</Item>
		);
	}
}
