import React from 'react';

module.exports = class Header extends React.Component {
	render() {
		return (
			<header>
				<div className="header-banner hidden-md-down"></div>
				<div className="header container">
					<div className="row no-gutters">
						<div className="logo-container col-md-5 col">
							<div className="toggle-nav">
								<i className="fa fa-bars hidden-md-up" aria-hidden="true"></i>
							</div>
							<h1 className="logo"><a href="/index.php">acitius</a></h1>
							<form className="search">
								<input type="text" placeholder="Search" />
								<button type="submit">
									<i className="fa fa-fw fa-search" aria-hidden="true"></i>
								</button>
							</form>
						</div>

						<div className="user-info-container col-md-7 col">
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

							<div className="icon notifications">
								<i className="fa fa-fw fa-bell" aria-hidden="true"></i>
								<span className="badge badge-pill badge-primary">23</span>
							</div>
							
							<div className="icon mail">
								<i className="fa fa-fw fa-envelope" aria-hidden="true"></i>
								<span className="badge badge-pill badge-primary">23</span>
							</div>
							
							<div className="user">
								<div className="avatar">
									<img src="/images/avatar-default.png" />
								</div>
								<span className="username hidden-md-down" data-hover="User">User</span>
								<i className="fa fa-fw fa-angle-down" aria-hidden="true"></i>
							</div>
						</div>
					</div>
				</div>
			</header>
		);
	}
};
