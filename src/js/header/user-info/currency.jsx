import React from 'react';

module.exports = class HeaderCurrency extends React.Component {
	render() {
		return (
			<div className="curreny-container">
				<table className="currency">
					<tbody>
						<tr className="wsg">
							<td>2,300</td>
							<td><a href="/webshop.php">WSG</a></td>
						</tr>
						<tr className="ap">
							<td>230,000</td>
							<td><a href="/bank.php">AP</a></td>
						</tr>
					</tbody>
				</table>
			</div>
		);
	}
};
