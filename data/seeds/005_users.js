const data = require('../fakeUserData');


console.log('SEEDS 5 ============', data.seeds5[50]);

exports.seed = function(knex) {
  return knex('users').insert(data.seeds5);
};
