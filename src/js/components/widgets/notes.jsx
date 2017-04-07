import React from 'react';

export default class NotesWidget extends React.Component {
	render() {
		return (
			<div className="form-group notes">
				<textarea className="form-control scrollbar" rows="10"></textarea>
			</div>
		);
	}
}
