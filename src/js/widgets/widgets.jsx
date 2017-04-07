import React from 'react';
import Widget from './widget';
import ChatWidget from './chat';
import NotesWidget from './notes';

module.exports = class Widgets extends React.Component {
	render() {
		return (
			<aside className="widgets col-auto mr-md-4 hidden-md-down">
				<Widget
					name="Chat"
					icon="fa-comments"
					widget={<ChatWidget />} />
				
				<Widget
					name="Notes"
					icon="fa-pencil-square-o"
					widget={<NotesWidget />} />
				
				<div className="ad ad-small-rectangle"></div>
			</aside>
		);
	}
};
