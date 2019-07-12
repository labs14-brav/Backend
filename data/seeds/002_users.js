const data = require('../fakeUserData');

console.log('SEEDS 2 ============', data.seeds2[50]);

exports.seed = function(knex) {
  return knex('users').insert(data.seeds2);
};
