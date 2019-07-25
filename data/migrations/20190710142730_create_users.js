exports.up = function(knex) {
  return knex.schema
    .createTable('users', users => {
        users.increments();
        
        users
            .string('type', 128);
        users
            .string('email', 128)
            .notNullable()
            .unique();
        users
            .string('uid')
            .notNullable()
            .unique()
        users
            .string('license')
        users
            .string('experience')
        users
            .string('specialization')
        users
            .string('language')
        users
            .string('general_details')
        users
            .string('mediatorStatus')
            .defaultTo('false')
    })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('users');
};
