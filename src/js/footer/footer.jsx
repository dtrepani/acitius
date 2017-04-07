import React from 'react';
import ListLinkItem from 'js/modules/list-link-item';
import FooterNavItems from 'data/footer-link-items';

module.exports = class Footer extends React.Component {
	render() {
		return (
			<footer>
				<div className="footer container justify-content-center">
					<div className="ad ad-leaderboard"></div>

					<nav className="footer-nav py-2">
						<ul className="nav justify-content-center">
							{
								FooterNavItems.map((item, index) =>
									<ListLinkItem
										key={index}
										name={item.name}
										liClass="nav-item"
										aClass="nav-link" />
								)
							}
						</ul>
					</nav>

					<span className="copyright">© Acitius 2017, All Rights Reserved</span>
				</div>
			</footer>
		);
	}
};
