import React from 'react';
import FooterNavItems from 'data/footer-link-items';
import { Grid, List } from 'semantic-ui-react';

export default class Footer extends React.PureComponent {
	render() {
		return (
			<footer>
				<Grid className="footer" padded>
					<div className="ui centered leaderboard test ad" data-text="Leaderboard"></div>

					<Grid.Row className="footer-nav">
						<List horizontal link>
							{
								FooterNavItems.map((item, index) =>
									<List.Item
										as="a"
										key={index}
									>
										{item.name}
									</List.Item>
								)
							}
						</List>
					</Grid.Row>

					<span className="copyright">© Acitius 2017, All Rights Reserved</span>
				</Grid>
			</footer>
		);
	}
}
