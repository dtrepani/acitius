import React from 'react';
import Header from './header';
import Nav from './nav';
import Content from './content';
import Widgets from './widgets';
import Footer from './footer';

class Layout extends React.Component {
	render() {
		return (
			<div>
				<Header />
				<div className="main-container container py-md-4">
					<div className="row">
						<Nav />
						<Content>
							{this.props.children}
						</Content>
						<Widgets />
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}

Layout.propTypes = { children: React.PropTypes.object.isRequired };

export default Layout;
