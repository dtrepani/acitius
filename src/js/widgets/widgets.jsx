import React from 'react';

module.exports = class Widgets extends React.Component {
	render() {
		return (
			<aside className="widgets col-auto mr-md-4 hidden-md-down">
				<div className="widget widget-chat">
					<h2>
						<i className="fa fa-fw fa-comment" aria-hidden="true"></i>
						Chat
						<i className="fa fa-fw fa-thumb-tack" aria-hidden="true"></i>
					</h2>
					<div className="card">
						<div className="card-block chat scrollbar-container">
							<div className="chat-history scrollbar">
								<div className="chat-msg">
									<span className="chat-time">15:00</span>
									<a href="profile.php?user=#" className="chat-user">Username</a>:
									<span className="chat-text">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
									</span>
								</div>
								<div className="chat-msg">
									<span className="chat-time">15:00</span>
									<a href="profile.php?user=#" className="chat-user">Username</a>:
									<span className="chat-text">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
									</span>
								</div>
								<div className="chat-msg">
									<span className="chat-time">15:00</span>
									<a href="profile.php?user=#" className="chat-user">Username</a>:
									<span className="chat-text">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
									</span>
								</div>
								<div className="chat-msg">
									<span className="chat-time">15:00</span>
									<a href="profile.php?user=#" className="chat-user">Username</a>:
									<span className="chat-text">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
									</span>
								</div>
								<div className="chat-msg">
									<span className="chat-time">15:00</span>
									<a href="profile.php?user=#" className="chat-user">Username</a>:
									<span className="chat-text">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
									</span>
								</div>
								<div className="chat-msg">
									<span className="chat-time">15:00</span>
									<a href="profile.php?user=#" className="chat-user">Username</a>:
									<span className="chat-text">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
									</span>
								</div>
								<div className="chat-msg">
									<span className="chat-time">15:00</span>
									<a href="profile.php?user=#" className="chat-user">Username</a>:
									<span className="chat-text">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
									</span>
								</div>
								<div className="chat-msg">
									<span className="chat-time">15:00</span>
									<a href="profile.php?user=#" className="chat-user">Username</a>:
									<span className="chat-text">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
									</span>
								</div>
								<div className="chat-msg">
									<span className="chat-time">15:00</span>
									<a href="profile.php?user=#" className="chat-user">Username</a>:
									<span className="chat-text">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
									</span>
								</div>
								<div className="chat-msg">
									<span className="chat-time">18:00</span>
									<a href="profile.php?user=#" className="chat-user">Foo</a>:
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
				</div>
				<div className="widget widget-notes">
					<h2>
						<i className="fa fa-fw fa-pencil-square-o" aria-hidden="true"></i>
						Notes
						<i className="fa fa-fw fa-thumb-tack" aria-hidden="true"></i>
					</h2>
					<div className="form-group notes">
						<textarea className="form-control scrollbar" rows="10"></textarea>
					</div>
				</div>
				<div className="ad ad-small-rectangle"></div>
			</aside>
		);
	}
};
