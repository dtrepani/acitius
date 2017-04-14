import React from 'react';

/*class ToggleNav extends React.Component {
	render() {
		return (
			<div className="toggle-nav" onClick={this.props.onToggleClick}>
				<i className="fa fa-bars hidden-md-up" aria-hidden="true"></i>
			</div>
		);
	}
}*/

function ToggleNav({ onToggleClick }) {
	return (
		<div className="toggle-nav" onClick={onToggleClick}>
			<i className="fa fa-bars hidden-md-up" aria-hidden="true"></i>
		</div>
	);
}

ToggleNav.propTypes = { onToggleClick: React.PropTypes.func.isRequired };

export default ToggleNav;
