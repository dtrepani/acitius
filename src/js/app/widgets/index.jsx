import React from 'react';
import Widget from './widget';
import ChatWidget from './chat';
import NotesWidget from './notes';

export default class Widgets extends React.Component {
	render() {
		return (
			<div id="widgets-container" className="four wide column computer only">
				<div className="ui segment">
					<div className="ui sticky sides">
						<aside className="widgets">
							<Widget name="Chat" icon="fa-comments">
								<ChatWidget />
							</Widget>

							<Widget name="Notes" icon="fa-pencil-square-o">
								<NotesWidget />
							</Widget>

							<div
								className="ui centered small rectangle test ad"
								data-text="Small Rectangle"></div>

						</aside>
					</div>
				</div>
			</div>
		);
	}
}
