'use strict'

exports.seed = function(knex) {
  return knex('cases').del()
    .then(function () {
      return knex('cases').insert([
        {id: 1, user_email: 'labs14brav-user@gmail.com', user_uid: 'crGiJFUlI4XxxbXC6F1wQ8gDn983', description: '', dispute_category: '', parties_involved: ''},
      ]);
    });
};
