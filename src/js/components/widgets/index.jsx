import React from 'react';
import Widget from './widget';
import ChatWidget from './chat';
import NotesWidget from './notes';

export default class Widgets extends React.Component {
	render() {
		return (
			<aside className="widgets col-auto mr-md-4 hidden-md-down">
				<Widget name="Chat" icon="fa-comments">
					<ChatWidget />
				</Widget>
				
				<Widget name="Notes" icon="fa-pencil-square-o">
					<NotesWidget />
				</Widget>
				
				<div className="ad ad-small-rectangle"></div>
			</aside>
		);
	}
}
