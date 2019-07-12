const data = require('../fakeUserData');

exports.seed = function(knex) {
  return knex('users').insert(data.seeds4);
};

