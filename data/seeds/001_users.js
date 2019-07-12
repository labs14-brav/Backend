const data = require('../fakeUserData');

exports.seed = function(knex) {
      return knex('users').insert(data.seeds1);
};

// {username: 'user1', type: 'user', email: 'user1@email.com', nickname: 'User'},
// {username: 'user2', type: 'mediator', email: 'user2@email.com', nickname: 'Mediator'},
// {username: 'user3', type: 'admin', email: 'user3@email.com', nickname: 'Admin'}