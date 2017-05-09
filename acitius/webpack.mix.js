const { mix } = require('laravel-mix');
require('dotenv').config();

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.browserSync({
  proxy: process.env.DB_HOST,
  open: false
});

mix
  .webpackConfig({ devServer: { contentBase: 'public' } })
  .autoload({
    jquery: ['$', 'jQuery', 'window.jQuery'],
    tether: ['Tether', 'window.Tether']
  })
  .sass('resources/assets/sass/frontend/app.scss', 'public/css/frontend.css')
  .sass('resources/assets/sass/backend/app.scss', 'public/css/backend.css')
  .js([
    'resources/assets/js/frontend/app.js',
    'resources/assets/js/plugin/sweetalert/sweetalert.min.js',
    'resources/assets/js/plugins.js'
  ], 'public/js/frontend.js')
  .js([
    'resources/assets/js/backend/app.js',
    'resources/assets/js/plugin/sweetalert/sweetalert.min.js',
    'resources/assets/js/plugins.js'
  ], 'public/js/backend.js')
  .extract([
    'lodash',
    'jquery',
    'tether',
    'bootstrap',
    'axios',
    'vue'
  ]);

if (mix.config.inProduction) {
  mix
    .version()
    .disableNotifications();
}

