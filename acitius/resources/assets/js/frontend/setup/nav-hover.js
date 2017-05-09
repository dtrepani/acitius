import HoverTemplate from './hover-template';

export default class NavSetup extends HoverTemplate {
  constructor() {
    super('#nav-accordion', 'collapse.data-api', '[data-toggle=collapse]');
  }

  static _hideOpenNav() {
    $('.main-subnav.collapse.show').collapse('hide');
  }

  /** @override */
  _hoverAction(e) {
    let href;
    const $hovered = $(e.target);
    const target = $hovered.attr('data-target') || e.preventDefault() ||
      ((href = $hovered.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, ''));

    NavSetup._hideOpenNav();
    $(target).collapse('show');
  }

  /** @override */
  _hoverCriteriaIsMet(e) {
    return $(e.target).hasClass('collapsed');
  }

  /** @override */
  _setupOtherActions() {
    $('.title[data-toggle="collapse"]').click(() => {
      NavSetup._hideOpenNav();
      this._clearActionTimeout();
    });
  }
}
