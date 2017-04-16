import React from 'react';

function ToggleNav({ onToggleClick }) {
	return (
		<div className="toggle-nav" onClick={onToggleClick}>
			<i className="content link icon"></i>
		</div>
	);
}

ToggleNav.propTypes = { onToggleClick: React.PropTypes.func.isRequired };

export default ToggleNav;
