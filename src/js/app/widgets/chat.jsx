import React from 'react';

export default class ChatWidget extends React.Component {
	render() {
		return (
			<div className="card">
				<div className="card-block chat scrollbar-container">
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

					<form className="chat-send">
						<input type="text" placeholder="Message" />
						<button type="submit">
							<i className="fa fa-fw fa-send-o" aria-hidden="true"></i>
						</button>
					</form>
				</div>
			</div>
		);
	}
}
