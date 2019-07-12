var faker = require('faker');

let seeds = [];
let typearray = ['User', 'Mediator', 'Admin'];
for (i = 0; i < 500; i++) {
  let rN = Math.floor(Math.random() * typearray.length);
  seeds[i] = {
    username: faker.name.findName(),
    type: typearray[rN],
    email: faker.internet.email(),
    nickname: faker.name.lastName(),
  };
};

console.log('fake users are populating seeds ======')
// console.log(seeds[0]);
// console.log(seeds[499]);

let seeds1 = seeds.slice(99);
// console.log('seeds1 ==========');
// console.log(seeds1[0], seeds1[99]);
let seeds2 = seeds.slice(100, 199);
 console.log('seeds2 ==========');
 console.log(seeds2[0], seeds2[98]);
let seeds3 = seeds.slice(200, 299);
 console.log('seeds3 ==========');
 console.log(seeds3[0], seeds3[98]);
let seeds4 = seeds.slice(300, 399);
 console.log('seeds4 ==========');
 console.log(seeds4[0], seeds4[98]);
let seeds5 = seeds.slice(400, 499);
 console.log('seeds5 ==========');
 console.log(seeds5[0], seeds5[98]);


module.exports = {
    seeds1,
    seeds2,
    seeds3,
    seeds4,
    seeds5
};