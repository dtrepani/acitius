import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header/header.jsx';
import Nav from './nav/nav.jsx';
import Content from './content/content.jsx';
import Widgets from './widgets/widgets.jsx';
import Footer from './footer/footer.jsx';

ReactDOM.render(
	(
		<div>
			<Header />
			<div className="main-container container py-md-4">
				<div className="row">
					<Nav />
					<Content />
					<Widgets />
				</div>
			</div>
			<Footer />
		</div>
	),
	document.getElementById('app')
);
