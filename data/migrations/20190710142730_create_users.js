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
            .integer('price')
        users
            .string('experience')
        users
            .string('specialization')
        users
            .string('language')
        users
            .string('professional_bio')
        users
            .string('name')
        users
            .datetime('deactivated_at')
        users
            .string('mediator_accepted_at')
        users
            .string('mediator_declined_at')
    })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('users');
};
