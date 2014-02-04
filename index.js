/**
 * Dependencies.
 */

var ago = require('ago');

/**
 * Parse `str` and return a new date.
 *
 * Examples:
 *
 * ```js
 * toDate('1 day from now');
 * toDate('23 days from now');
 * toDate('23 minutes from now');
 *
 * toDate('1 day ago');
 * toDate('11 months ago');
 * ```
 *
 * @param {String} str
 * @returns {Date}
 * @api public
 */

function toDate(str) {
  var parts = str.split(' ');
  var amount = parts.shift();
  var unit = parts.shift();
  var method = parts.join(' ');
  var time = null;

  if (method === 'from now') {
    time = ago.fromNow(amount, unit);
  } else if (method === 'ago') {
    time = ago(amount, unit);
  } else {
    throw new Error('Invalid method: ' + method);
  }

  return new Date(time);
}

/**
 * Primary export.
 */

module.exports = toDate;
