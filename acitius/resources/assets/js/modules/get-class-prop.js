/**
 * Get a CSS property value from a specified class or class combination.
 * @param {string} property
 * @param {string} fromClass - Can add multiple classes using spaces as separators
 *                             @see https://api.jquery.com/addclass/
 * @returns {string}
 */
export default function(property, fromClass) {
  const $elemWithClass = $('<div>').css('display', 'none').addClass(fromClass);
  $('body').append($elemWithClass);

  const val = $elemWithClass.css(property);
  $elemWithClass.remove();

  return val;
}
