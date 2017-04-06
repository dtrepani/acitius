import React from 'react';

module.exports = class Nav extends React.Component {
	render() {
		return (
			<nav className="main-nav col-auto mr-md-4 ml-md-4" id="accordion" aria-multiselectable="true">
				<div className="card">
					<div className="card-header" role="tab">
						<a href="/news.php" title="News" id="news">
							<i className="fa fa-fw fa-newspaper-o" aria-hidden="true"></i>
							<span className="nav-item">News</span>
						</a>
					</div>
				</div>

				<div className="card">
					<div className="card-header" role="tab">
						<a data-toggle="collapse" data-parent="#accordion"	href="#sub-my-stuff" title="My Stuff"
							id="my-stuff" aria-expanded="false" aria-controls="sub-my-stuff">
							<i className="fa fa-fw fa-heart" aria-hidden="true"></i>
							My Stuff
							<i className="fa fa-fw fa-angle-right" aria-hidden="true"></i>
						</a>
					</div>
					<ul id="sub-my-stuff" className="card-block collapse" role="tabpanel" aria-labelledby="my-stuff">
						<li> <a href="/items.php" title="Inventory">Inventory</a> </li>
						<li> <a href="/quests.php" title="Quests">Quests</a> </li>
						<li> <a href="/achievements.php" title="Achievements">Achievements</a> </li>
						<li> <a href="/collections.php" title="Collections">Collections</a> </li>
						<li> <a href="/augmenting.php" title="Augmenting">Augmenting</a> </li>
						<li> <a href="/achievements.php" title="Achievements">Achievements</a> </li>
						<li> <a href="/cooking.php" title="Cooking">Cooking</a> </li>
						<li> <a href="/fishing.php" title="Fishing">Fishing</a> </li>
						<li> <a href="/gardening.php" title="Gardening">Gardening</a> </li>
						<li> <a href="/galleries.php?mygalleries" title="Galleries">Galleries</a> </li>
					</ul>
				</div>

				<div className="card">
					<div className="card-header" role="tab">
						<a data-toggle="collapse" data-parent="#accordion"	href="#sub-pets" id="pets" title="Pets"
							aria-expanded="false" aria-controls="sub-pets">
							<i className="fa fa-fw fa-paw" aria-hidden="true"></i>
							Pets
							<i className="fa fa-fw fa-angle-right" aria-hidden="true"></i>
						</a>
					</div>
					<ul id="sub-pets" className="card-block collapse" role="tabpanel" aria-labelledby="pets">
						<li> <a href="/pets.php" title="My Pets">My Pets</a> </li>
						<li> <a href="/createpet.php" title="Create Pet">Create Pet</a> </li>
						<li> <a href="/dating.php" title="Dating">Dating</a> </li>
						<li> <a href="/sales.php" title="Sales">Sales</a> </li>
						<li> <a href="/gamma.php" title="Gamma Machine">Gamma Machine</a> </li>
						<li> <a href="/enchantments.php" title="Enchantments">Enchantments</a> </li>
					</ul>
				</div>

				<div className="card">
					<div className="card-header" role="tab">
						<a data-toggle="collapse" data-parent="#accordion"	href="#sub-shops" id="shops" title="Shops"
							aria-expanded="false" aria-controls="sub-shops">
							<i className="fa fa-fw fa-shopping-cart" aria-hidden="true"></i>
							Shops
							<i className="fa fa-fw fa-angle-right" aria-hidden="true"></i>
						</a>
					</div>
					<ul id="sub-shops" className="card-block collapse" role="tabpanel" aria-labelledby="shops">
						<li> <a href="/myshop.php" title="My Shop">My Shop</a> </li>
						<li> <a href="/explore.php?map=shops" title="Shops">Shops</a> </li>
						<li> <a href="/webshop.php" title="Webshop">Webshop</a> </li>
						<li> <a href="/crystals.php" title="Crystal Cavern">Crystal Cavern</a> </li>
						<li> <a href="/itemsearch.php" title="Item Search">Item Search</a> </li>
						<li> <a href="/trades.php" title="Trades">Trades</a> </li>
						<li> <a href="/auctions.php" title="Auctions">Auctions</a> </li>
					</ul>
				</div>

				<div className="card">
					<div className="card-header" role="tab">
						<a data-toggle="collapse" data-parent="#accordion"	href="#sub-community" id="community"
							title="Community" aria-expanded="false" aria-controls="sub-community">
							<i className="fa fa-fw fa-comments" aria-hidden="true"></i>
							Community
							<i className="fa fa-fw fa-angle-right" aria-hidden="true"></i>
						</a>
					</div>
					<ul id="sub-community" className="card-block collapse" role="tabpanel" aria-labelledby="community">
						<li> <a href="/forums.php" title="Forums">Forums</a> </li>
						<li> <a href="/aftermath.php" title="Aftermath Power">Aftermath Power</a> </li>
						<li> <a href="/artist.php" title="Online Artist">Onpne Artist</a> </li>
						<li> <a href="/holidays.php" title="Holidays">Hopdays</a> </li>
						<li> <a href="/wiki.php" title="Wiki">Wiki</a> </li>
					</ul>
				</div>

				<div className="card">
					<div className="card-header" role="tab">
						<a data-toggle="collapse" data-parent="#accordion"	href="#sub-world" id="world" title="World"
							aria-expanded="false" aria-controls="sub-world">
							<i className="fa fa-fw fa-globe" aria-hidden="true"></i>
							World
							<i className="fa fa-fw fa-angle-right" aria-hidden="true"></i>
						</a>
					</div>
					<ul id="sub-world" className="card-block collapse" role="tabpanel" aria-labelledby="world">
						<li> <a href="/explore.php" title="Explore">Explore</a> </li>
						<li> <a href="/arena.php" title="Arena">Arena</a> </li>
					</ul>
				</div>
				
				<div className="card">
					<div className="card-header" role="tab">
						<a href="/games.php" title="Games" id="games">
							<i className="fa fa-fw fa-star" aria-hidden="true"></i>
							Games
						</a>
					</div>
				</div>

				<div className="card">
					<div className="card-header" role="tab">
						<a href="/newstaff.php" title="Staff" id="staff">
							<i className="fa fa-fw fa-id-badge" aria-hidden="true"></i>
							Staff
						</a>
					</div>
				</div>

				<div className="card hidden-lg-up">
					<div className="card-header" role="tab">
						<a href="/widgets.php" title="Widgets" id="widgets">
							<i className="fa fa-fw fa-cogs" aria-hidden="true"></i>
							Widgets
						</a>
					</div>
				</div>

				<div className="ad ad-small-square"></div>
			</nav>
		);
	}
};
