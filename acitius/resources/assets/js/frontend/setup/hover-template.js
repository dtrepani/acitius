/* eslint-disable no-console */

import { bindAll } from 'lodash';

export default class HoverTemplate {
  /**
   * @param {string} trigger - Name of element that triggers the hover events.
   *
   * @see http://api.jquery.com/on/
   * @param {?string} eventApi - Event API to listen for, if any. Does not include the "mouseenter"
   *                             or "mouseleave" portion. For example, "mouseenter.collapse.data-api"
   *                             would be passed through as "collapse.data-api"
   * @param {?string} selector
   */
  constructor(trigger, eventApi = '', selector = '') {
    this.eventApi = eventApi;
    this.selector = selector;
    this.trigger = $(trigger);

    bindAll(this, ['_actionOnHover', '_actionOnMouseLeave', '_setActionTimeout']);

    this._setHover();
  }

  _actionOnHover(e) {
    if (this._hoverCriteriaIsMet(e)) {
      this._setActionTimeout(e);
    }
  }

  _actionOnMouseLeave(e) {
    this._clearActionTimeout();
    this._afterMouseLeaveHook();
  }


  /**
   * Actions to take after the mouse leaves event. Can be used to undo hover action.
   * @private
   * @abstract
   */
  _afterMouseLeaveHook() { } // eslint-disable-line

  _clearActionTimeout() {
    clearTimeout(this.timeout);
  }

  /**
   * Actual action to be performed on hover. Will usually take the form of target.fn();
   * @private
   * @abstract
   */
  _hoverAction(e) {
    console.log('Must override method _hoverAction.');
  }

  /**
   * May not always want to trigger the hover action on mouse enter.
   * @param {object} e - Event information from mouseenter
   * @returns {boolean} - Whether or not the hover action should be triggered.
   * @private
   * @abstract
   */
  _hoverCriteriaIsMet(e) {
    console.log('Must override method _hoverCriteriaIsMet.');
  }

  _setActionTimeout(e) {
    const that = this;
    this._clearActionTimeout();

    this.timeout = setTimeout(() => {
      that._hoverAction(e);
    }, 500);
  }

  _setHover() {
    // Prefix the event api with a dot if it exists in order to attach it to the mouseenter
    // and mouseleave events.
    const eventApi = (this.eventApi === '')
      ? this.eventApi
      : `.${this.eventApi}`;

    this.trigger.on(`mouseenter${eventApi}`, this.selector, this._actionOnHover);
    this.trigger.on(`mouseleave${eventApi}`, this.selector, this._actionOnMouseLeave);

    this._setupOtherActions();
  }

  /**
   * May need other actions to be performed that effects the hover action, such as a click
   * that cancels the hover action.
   * @private
   * @abstract
   */
  _setupOtherActions() { } // eslint-disable-line
}
