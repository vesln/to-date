/**
 * Test config.
 *
 * @param {Object} hydro
 * @api public
 */

module.exports = function(hydro) {
  hydro.set({
    plugins: [ 'hydro-bdd' ],
    formatter: 'hydro-simple',
    tests: [ 'test/*.js' ]
  });
};
