<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title>@yield('title', app_name())</title>

        <!-- Meta -->
        <meta name="description" content="@yield('meta_description', 'Acitius is a virtual pet RPG with battles, quests, fishing, cooking, and more!')">
        <meta name="keywords" content="@yield('pets, games, virtual pet, flash games, kids virtual pet, rpg')" />
        <meta name="robots" content="@yield('index,follow')" />
        @yield('meta')

        <link rel="shortcut icon" href="http://www.acitius.com/amz.ico" type="image/x-icon" />
        <link rel="alternate" title="Acitius RSS" href="http://www.acitius.com/rss.php" type="application/rss+xml" />

        <!-- Styles -->
        @yield('before-styles')
        {{ Html::style(mix('css/frontend.css')) }}
        @yield('after-styles')

        <!-- Scripts -->
        <script>
            window.Laravel = <?php echo json_encode([
                'csrfToken' => csrf_token(),
            ]); ?>
        </script>
    </head>

    <body>
        <div id="app">
            @include('includes.partials.logged-in-as')
            @include('frontend.includes.header')

            <div class="overlay hidden"></div>

            <div class="fixed">
                <div class="pinned widgets">
                    <div class="card">
                        @include('frontend.includes.widgets.chat')
                    </div>
                </div>

                <div class="fixed-actions">
                    <div class="top-scroller">
                        <i class="fa fa-arrow-up"></i>
                    </div>
                    <div class="widget-heads">
                        <span class="fa-stack fa-lg chat">
                            <i class="fa fa-circle fa-stack-2x"></i>
                            <i class="fa fa-comment fa-stack-1x fa-inverse"></i>
                        </span>
                        <span class="fa-stack fa-lg notes">
                            <i class="fa fa-circle fa-stack-2x"></i>
                            <i class="fa fa-pencil-square-o fa-stack-1x fa-inverse"></i>
                        </span>
                    </div>
                </div>
            </div>

            <div class="main-container container py-md-4">
                <div class="row">
                    @include('frontend.includes.nav')

                    <main class="col mr-md-2 px-0 px-md-3">
                        <div class="card">
                            <div class="card-block">
                                @include('includes.partials.messages')
                                @yield('content')
                            </div>
                        </div>
                    </main>

                    @include('frontend.includes.widgets')
                </div>
            </div>

            @include('frontend.includes.footer')
        </div><!--#app-->

        <!-- Scripts -->
        @yield('before-scripts')
        {!! Html::script(mix('js/manifest.js')) !!}
        {!! Html::script(mix('js/vendor.js')) !!}
        {!! Html::script(mix('js/frontend.js')) !!}
        @yield('after-scripts')

        @include('includes.partials.ga')
    </body>
</html>
