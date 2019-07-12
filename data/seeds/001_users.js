var faker = require('faker');
faker.seed(1);

let seeds = [];
let typearray = ['User', 'Mediator', 'Admin'];
for (i = 0; i < 100; i++) {
  let rN = Math.floor(Math.random() * typearray.length);
  seeds[i] = {
    username: faker.name.findName(),
    type: typearray[rN],
    email: faker.internet.email(),
    nickname: faker.name.lastName(),
  };
};

console.log(seeds);

exports.seed = function(knex) {
      return knex('users').insert(seeds);
};

// {username: 'user1', type: 'user', email: 'user1@email.com', nickname: 'User'},
// {username: 'user2', type: 'mediator', email: 'user2@email.com', nickname: 'Mediator'},
// {username: 'user3', type: 'admin', email: 'user3@email.com', nickname: 'Admin'}