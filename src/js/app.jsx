import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header/header';
import Nav from './nav/nav';
import Content from './content/content';
import Widgets from './widgets/widgets';
import Footer from './footer/footer';

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
