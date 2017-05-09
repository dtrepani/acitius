<aside class="aside-nav-container card col-auto mr-md-2 ml-md-4">
    <div class="aside-nav asides-sticky">
        @include('frontend.includes.search', [ 'class' => 'hidden-md-up'])

        <nav
            id="nav-accordion"
            class="main-nav"
            role="tablist"
            aria-multiselectable="true"
        >
            @include('frontend.includes.nav-item', [
                'name' => 'News',
                'icon' => 'newspaper-o',
                'id' => 'news',
                'link' => '/news'
            ])

            @include('frontend.includes.nav-item', [
                'name' => 'My Stuff',
                'icon' => 'heart',
                'id' => 'my-stuff',
                'subnav' => [
                    ['name' => 'Inventory', 'link' => '/inventory'],
                    ['name' => 'Quests', 'link' => '/quests'],
                    ['name' => 'Achievements', 'link' => '/achievements'],
                    ['name' => 'Collections', 'link' => '/collections'],
                    ['name' => 'Augmenting', 'link' => '/augmenting'],
                    ['name' => 'Cooking', 'link' => '/cooking'],
                    ['name' => 'Fishing', 'link' => '/fishing'],
                    ['name' => 'Gardening', 'link' => '/gardening'],
                    ['name' => 'Galleries', 'link' => '/gallery.php?mygalleries'],
                ]
            ])

            @include('frontend.includes.nav-item', [
                'name' => 'Pets',
                'icon' => 'paw',
                'id' => 'pets',
                'subnav' => [
                    ['name' => 'My Pets', 'link' => '/pets'],
                    ['name' => 'Create Pet', 'link' => '/createpet'],
                    ['name' => 'Dating', 'link' => '/dating'],
                    ['name' => 'Sales', 'link' => '/sales'],
                    ['name' => 'Gamma Machine', 'link' => '/gamma'],
                    ['name' => 'Enchantments', 'link' => '/enchantments']
                ]
            ])

            @include('frontend.includes.nav-item', [
                'name' => 'Shops',
                'icon' => 'shopping-cart',
                'id' => 'shops',
                'subnav' => [
                    ['name' => 'My Shop', 'link' => '/myshop'],
                    ['name' => 'Shops', 'link' => '/explore.php?map=shops'],
                    ['name' => 'Webshop', 'link' => '/webshop'],
                    ['name' => 'Crystal Cavern', 'link' => '/crystals'],
                    ['name' => 'Item Search', 'link' => '/itemsearch'],
                    ['name' => 'Trades', 'link' => '/trades'],
                    ['name' => 'Auctions', 'link' => '/auctions']
                ]
            ])

            @include('frontend.includes.nav-item', [
                'name' => 'Community',
                'icon' => 'comments',
                'id' => 'community',
                'subnav' => [
                    ['name' => 'Forums', 'link' => '/forums'],
                    ['name' => 'Aftermath Power', 'link' => '/aftermath'],
                    ['name' => 'Online Artist', 'link' => '/artist'],
                    ['name' => 'Holidays', 'link' => '/holidays'],
                    ['name' => 'Wiki', 'link' => '/wiki']
                ]
            ])

            @include('frontend.includes.nav-item', [
                'name' => 'World',
                'icon' => 'globe',
                'id' => 'world',
                'subnav' => [
                    ['name' => 'Explore', 'link' => '/explore'],
                    ['name' => 'Arena', 'link' => '/arena']
                ]
            ])

            @include('frontend.includes.nav-item', [
                'name' => 'Games',
                'icon' => 'star',
                'id' => 'games',
                'link' => '/games'
            ])

            @role('Administrator')
                @include('frontend.includes.nav-item', [
                    'name' => 'Staff',
                    'icon' => 'users',
                    'id' => 'staff',
                    'link' => '/staff'
                ])
            @endauth

            @include('frontend.includes.nav-item', [
                'name' => 'Widgets',
                'icon' => 'cogs',
                'id' => 'widgets',
                'link' => '/widgets',
                'class' => 'hidden-lg-up'
            ])
        </nav>

        <div class="below-nav">
            <div class="ad ad-small-square"></div>
        </div>
    </div>
</aside>
