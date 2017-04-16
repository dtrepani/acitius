import React from 'react';
import ListItemLink from 'js/modules/list-item-link';
import FooterNavItems from 'data/footer-link-items';

export default class Footer extends React.PureComponent {
	render() {
		return (
			<footer>
				<div className="footer ui padded grid">
					<div className="ui centered leaderboard test ad" data-text="Leaderboard"></div>

					<nav className="footer-nav py-2">
						<ul className="nav justify-content-center">
							{
								FooterNavItems.map((item, index) =>
									<ListItemLink
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
}
