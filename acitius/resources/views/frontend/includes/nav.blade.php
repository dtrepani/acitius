{{--<div id="accordion" role="tablist" aria-multiselectable="true">--}}
    {{--<div class="card">--}}
        {{--<div class="card-header" role="tab" id="headingOne">--}}
            {{--<h5 class="mb-0">--}}
                {{--<a data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">--}}
                    {{--Collapsible Group Item #1--}}
                {{--</a>--}}
            {{--</h5>--}}
        {{--</div>--}}

        {{--<div id="collapseOne" class="collapse show" role="tabpanel" aria-labelledby="headingOne">--}}
            {{--<div class="card-block">--}}
                {{--Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.--}}
            {{--</div>--}}
        {{--</div>--}}
    {{--</div>--}}
    {{--<div class="card">--}}
        {{--<div class="card-header" role="tab" id="headingTwo">--}}
            {{--<h5 class="mb-0">--}}
                {{--<a class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">--}}
                    {{--Collapsible Group Item #2--}}
                {{--</a>--}}
            {{--</h5>--}}
        {{--</div>--}}
        {{--<div id="collapseTwo" class="collapse" role="tabpanel" aria-labelledby="headingTwo">--}}
            {{--<div class="card-block">--}}
                {{--Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.--}}
            {{--</div>--}}
        {{--</div>--}}
    {{--</div>--}}
    {{--<div class="card">--}}
        {{--<div class="card-header" role="tab" id="headingThree">--}}
            {{--<h5 class="mb-0">--}}
                {{--<a class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">--}}
                    {{--Collapsible Group Item #3--}}
                {{--</a>--}}
            {{--</h5>--}}
        {{--</div>--}}
        {{--<div id="collapseThree" class="collapse" role="tabpanel" aria-labelledby="headingThree">--}}
            {{--<div class="card-block">--}}
                {{--Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.--}}
            {{--</div>--}}
        {{--</div>--}}
    {{--</div>--}}
{{--</div>--}}

<nav
    id="nav-accordion"
    class="main-nav card col-auto mr-md-2 ml-md-4"
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

    <div class="below-nav">
        <div class="ad ad-small-square"></div>
    </div>
</nav>
