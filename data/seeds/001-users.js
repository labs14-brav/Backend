'use strict'

exports.seed = function(knex) {
  return knex('users').del()
    .then(function () {
      return knex('users').insert([
        {id: 1, type: 'user', email: 'labs14brav-user@gmail.com', uid: 'crGiJFUlI4XxxbXC6F1wQ8gDn983'}, // password: secret
        {id: 2, type: 'admin', email: 'labs14brav-admin@gmail.com', uid: 'rkYJqWNwHVb06XFszYhQOkuU5h42'}, // password: secret
      ]);
    });
};
