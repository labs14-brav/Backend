exports.up = function(knex) {
  return knex.schema
    .createTable('users', users => {
        users.increments();
        users
            .string('username', 128)
        users
            .string('type', 128);
        users
            .string('email', 128)
            .notNullable()
            .unique();
       users
            .string('uid')
            
    })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('users');
};
