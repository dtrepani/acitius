import React from 'react';
import { TextArea } from 'semantic-ui-react';

export default class NotesWidget extends React.Component {
	render() {
		return (
			<div className="notes">
				<TextArea
					className="scrollbar"
					rows="10"
					placeholder="Write notes..."
				>
				</TextArea>
			</div>
		);
	}
}
