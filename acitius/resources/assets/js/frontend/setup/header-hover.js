import HoverTemplate from './hover-template';

export default class HeaderSetup extends HoverTemplate {
  constructor() {
    super('.user.dropdown', 'dropdown.data-api', '[data-toggle=dropdown]');
  }

  /** @override */
  _hoverAction(e) {
    $('#user-dropdown-toggle').dropdown('toggle');
  }

  /** @override */
  _hoverCriteriaIsMet(e) {
    return !$('.user.dropdown').hasClass('show');
  }

  /** @override */
  _setupOtherActions() {
    $('#user-dropdown-toggle').click(() => {
      this._clearActionTimeout();
    });
  }
}
