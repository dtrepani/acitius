import React from 'react';
import Widget from './widget';
import ChatWidget from './chat';
import NotesWidget from './notes';
import { Grid, Segment } from 'semantic-ui-react';

export default class Widgets extends React.Component {
	render() {
		return (
			<Grid.Column
				id="widgets-container"
				width="four"
				only="computer"
			>
				<Segment>
					<div className="ui sticky sides">
						<aside className="widgets">
							<Widget name="Chat" icon="comments">
								<ChatWidget />
							</Widget>

							<Widget name="Notes" icon="edit">
								<NotesWidget />
							</Widget>

							<div
								className="ui centered small rectangle test ad"
								data-text="Small Rectangle"></div>
						</aside>
					</div>
				</Segment>
			</Grid.Column>
		);
	}
}
