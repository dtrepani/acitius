/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import '../bootstrap';
import NavHover from './setup/nav-hover';
import navStorage from './setup/nav-storage';
import HeaderHover from './setup/header-hover';
import sidebarSetup from './setup/sidebar-setup';

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('example', require('../components/frontend/Example.vue'));

const app = new Vue({ el: '#app' });

navStorage();
sidebarSetup();
const navHover = new NavHover();
const headerHover = new HeaderHover();
