import React from 'react';
import { Card, Icon, Input } from 'semantic-ui-react';

export default class ChatWidget extends React.Component {
	render() {
		return (
			<Card>
				<div className="chat scrollbar-container">
					<div className="chat-history scrollbar">
						<div className="chat-msg">
							<span className="chat-time">15:00 </span>
							<a href="profile.php?user=#" className="chat-user">Username</a>:&nbsp;
							<span className="chat-text">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							</span>
						</div>
						<div className="chat-msg">
							<span className="chat-time">15:00 </span>
							<a href="profile.php?user=#" className="chat-user">Username</a>:&nbsp;
							<span className="chat-text">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							</span>
						</div>
						<div className="chat-msg">
							<span className="chat-time">15:00 </span>
							<a href="profile.php?user=#" className="chat-user">Username</a>:&nbsp;
							<span className="chat-text">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							</span>
						</div>
						<div className="chat-msg">
							<span className="chat-time">15:00 </span>
							<a href="profile.php?user=#" className="chat-user">Username</a>:&nbsp;
							<span className="chat-text">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							</span>
						</div>
						<div className="chat-msg">
							<span className="chat-time">15:00 </span>
							<a href="profile.php?user=#" className="chat-user">Username</a>:&nbsp;
							<span className="chat-text">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							</span>
						</div>
						<div className="chat-msg">
							<span className="chat-time">15:00 </span>
							<a href="profile.php?user=#" className="chat-user">Username</a>:&nbsp;
							<span className="chat-text">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							</span>
						</div>
						<div className="chat-msg">
							<span className="chat-time">15:00 </span>
							<a href="profile.php?user=#" className="chat-user">Username</a>:&nbsp;
							<span className="chat-text">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							</span>
						</div>
						<div className="chat-msg">
							<span className="chat-time">15:00 </span>
							<a href="profile.php?user=#" className="chat-user">Username</a>:&nbsp;
							<span className="chat-text">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							</span>
						</div>
						<div className="chat-msg">
							<span className="chat-time">15:00 </span>
							<a href="profile.php?user=#" className="chat-user">Username</a>:&nbsp;
							<span className="chat-text">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							</span>
						</div>
						<div className="chat-msg">
							<span className="chat-time">18:00 </span>
							<a href="profile.php?user=#" className="chat-user">Foo</a>:&nbsp;&nbsp;
							<span className="chat-text">lol</span>
						</div>
					</div>

					<Input
						className="chat-send"
						icon={<Icon name="send outline" link />}
						placeholder="Message"
					/>
				</div>
			</Card>
		);
	}
}
