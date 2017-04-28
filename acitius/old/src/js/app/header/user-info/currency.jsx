import React from 'react';
import { Link } from 'react-router-dom';

export default class HeaderCurrency extends React.Component {
	render() {
		return (
			<div className="currency-container">
				<table className="currency">
					<tbody>
						<tr className="wsg">
							<td>2,300</td>
							<td>
								<Link to="/webshop" title="Webshop">WSG</Link>
							</td>
						</tr>
						<tr className="ap">
							<td>230,000</td>
							<td>
								<Link to="/bank" title="Bank">AP</Link>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		);
	}
}
