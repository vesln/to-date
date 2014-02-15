/**
 * Dependencies.
 */

var ago = require('ago');

/**
 * Supported units.
 */

var units = [
  'second',
  'seconds',
  'minute',
  'minutes',
  'hour',
  'hours',
  'day',
  'days',
  'week',
  'weeks',
  'month',
  'months',
  'year',
  'years',
];

/**
 * To Date.
 *
 * @param {Number} amount
 * @param {String} unit [optional]
 * @param {String} method [optional]
 * @constructor
 */

function ToDate(amount, unit, method) {
  this.amount = amount;
  this.method = method;
  this.unit = unit;
}

/**
 * Parse `str` and return a new date.
 *
 * Examples:
 *
 * ```js
 * ToDate.parse('1 day from now');
 * ToDate.parse('23 days from now');
 * ToDate.parse('23 minutes from now');
 *
 * ToDate.parse('1 day ago');
 * ToDate.parse('11 months ago');
 * ```
 *
 * @param {String} input
 * @returns {Date}
 * @api public
 */

ToDate.parse = function(input) {
  var parts = input.split(' ');
  return new ToDate(parts.shift(), parts.shift(), parts.join(' ')).build();
};

/**
 * Prototype.
 */

ToDate.prototype = {

  /**
   * Set the method to "from now" and return the desired date.
   *
   * @returns {Date}
   * @api public
   */

  get fromNow() {
    this.method = 'from now';
    return this.build();
  },

  /**
   * Set the method to "ago" and return the desired date.
   *
   * @returns {Date}
   * @api public
   */

  get ago() {
    this.method = 'ago';
    return this.build();
  },

  /**
   * #fromNow alias.
   *
   * @returns {Date}
   * @api public
   */

  get now() {
    return this.fromNow();
  },

  /**
   * Chain.
   *
   * @returns {ToDate}
   * @api public
   */

  get from() {
    return this;
  },

  /**
   * Build the desired date and return it.
   *
   * @returns {Date}
   * @api public
   */

  build: function() {
    var time = null;

    if (this.method === 'from now') {
      time = ago.fromNow(this.amount, this.unit);
    } else if (this.method === 'ago') {
      time = ago(this.amount, this.unit);
    } else {
      throw new Error('Invalid method: ' + this.method);
    }

    return new Date(time);
  },
};

/**
 * Set all units as getters.
 */

units.forEach(function(unit) {
  Object.defineProperty(ToDate.prototype, unit, {
    get: function() {
      this.unit = unit;
      return this;
    }
  });
});

/**
 * Handle input.
 *
 * @param {String|Number} str
 * @returns {Date|ToDate}
 * @api public
 */

module.exports = function(input) {
  return typeof input === 'number'
    ? new ToDate(input)
    : ToDate.parse(input);
};
