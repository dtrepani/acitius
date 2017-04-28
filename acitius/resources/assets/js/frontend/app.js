/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('../bootstrap');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('example', require('../components/frontend/Example.vue'));

const app = new Vue({ el: '#app' });

$(() => {
  saveNavState();
  setNavHover();
});

function saveNavState() {
  const $navAccordion = $('#nav-accordion');

  $navAccordion.on('shown.bs.collapse', () => {
    localStorage.setItem('collapseItem', $navAccordion.find('.collapse.show').attr('id'));
  });

  $navAccordion.on('hide.bs.collapse', () => {
    const closingItem = $navAccordion.find('.collapse.show').attr('id');
    if (collapseItem === closingItem) {
      localStorage.removeItem('collapseItem');
    }
  });

  const collapseItem = localStorage.getItem('collapseItem');
  if (collapseItem) {
    $(`#${collapseItem}`).collapse('show');
  }
}

function setNavHover() {
  let timeout;
  const $navAccordion = $('#nav-accordion');

  $navAccordion.on('mouseenter.collapse.data-api', '[data-toggle=collapse]', showNavInX);
  $navAccordion.on('mouseleave.collapse.data-api', '[data-toggle=collapse]', clearShowNavInX);

  // $title.hover(showNavInX, clearShowNavInX);
  $navAccordion.click(clearShowNavInX);

  function clearShowNavInX() {
    console.log(timeout);
    clearTimeout(timeout);
  }

  function showNavInX(e) {
    let href;
    const $this = $(this);
    const target = $this.attr('data-target') || e.preventDefault() ||
      ((href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, ''));;
    const $target = $(target);

    console.log($this.data());

    if ($this.hasClass('collapsed')) {
      console.log("set timeout");
      clearShowNavInX();
      timeout = setTimeout(() => {
        console.log("trigger timeout");
        $target.collapse($this.data());
      }, 500);
    }
  }
}
