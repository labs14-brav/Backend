const data = require('../fakeUserData');


console.log('SEEDS 3 ============', data.seeds3[50]);

exports.seed = function(knex) {
  return knex('users').insert(data.seeds3);
};
