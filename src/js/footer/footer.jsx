import React from 'react';

module.exports = class Footer extends React.Component {
	render() {
		return (
			<footer>
				<div className="footer container justify-content-center">
					<div className="ad ad-leaderboard"></div>

					<nav className="footer-nav py-2">
						<ul className="nav justify-content-center">
							<li className="nav-item">
								<a href="/termsofservice.php" className="nav-link" title="Terms of Service">
									Terms of Service
								</a>
							</li>
							<li className="nav-item">
								<a href="/privacypolicy.php" className="nav-link" title="Privacy Policy">
									Privacy Policy
								</a>
							</li>
							<li className="nav-item">
								<a href="/rules.php" className="nav-link" title="Rules">
									Rules
								</a>
							</li>
							<li className="nav-item">
								<a href="/vitalstats.php" className="nav-link" title="Stats">
									Stats
								</a>
							</li>
							<li className="nav-item">
								<a href="/staff.php" className="nav-link" title="Staff">
									Staff
								</a>
							</li>
							<li className="nav-item">
								<a href="/linktous.php" className="nav-link" title="Link to Us">
									Link to Us
								</a>
							</li>
							<li className="nav-item">
								<a href="/faq.php" className="nav-link" title="FA fa-fwQ">FAQ
								</a>
							</li>
						</ul>
					</nav>

					<span className="copyright">© Acitius 2017, All Rights Reserved</span>
				</div>
			</footer>
		);
	}
};
