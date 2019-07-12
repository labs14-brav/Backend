const data = require('../fakeUserData');


console.log('SEEDS 4 ============', data.seeds4[50]);

exports.seed = function(knex) {
  return knex('users').insert(data.seeds4);
};

