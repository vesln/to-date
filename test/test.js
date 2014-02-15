var timekeeper = require('timekeeper');
var assert = require('assert');
var toDate = require('../');
var DAY = 1000 * 60 * 60 * 24

describe(toDate, function() {
  before(function() {
    timekeeper.freeze(new Date);
  });

  after(function() {
    timekeeper.reset();
  });

  describe('parse', function() {
    it('returns a date object', function() {
      assert(toDate('1 day from now') instanceof Date);
    });

    describe('from now', function() {
      it('returns date in the future', function() {
        var expected = Date.now() + DAY;
        var actual = toDate('1 day from now').getTime();
        assert.equal(actual, expected);
      });
    });

    describe('ago', function() {
      it('returns date in the past', function() {
        var expected = Date.now() - DAY;
        var actual = toDate('1 day ago').getTime();
        assert.equal(actual, expected);
      });
    });

    describe('invalid method', function() {
      it('errors', function() {
        assert.throws(function() {
          toDate('1 day typo');
        });
      });
    });
  });

  describe('api', function() {
    it('can return date in the past', function() {
      var actual = toDate(1).day.ago.getTime();
      var expected = Date.now() - DAY;
      assert.equal(actual, expected);
    });

    it('can return date in the future', function() {
      var actual = toDate(1).day.fromNow.getTime();
      var expected = Date.now() + DAY;
      assert.equal(actual, expected);
    });
  });
});
