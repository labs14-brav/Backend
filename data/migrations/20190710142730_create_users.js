exports.up = function(knex) {
  return knex.schema.createTable("users", users => {
    users.increments();

    users.string("type", 128);
    users
      .string("email", 128)
      .notNullable()
      .unique();
    users
      .string("uid")
      .notNullable()
      .unique();
    users.text("license");
    users.integer("price").defaultTo(0);
    users.text("experience");
    users.text("specialization");
    users.text("language");
    users.text("professional_bio");
    users.text("name");
    users.datetime("deactivated_at");
    users.string("mediator_accepted_at");
    users.string("mediator_declined_at");
    users.string("stripe_user_id");
    users.string("is_stripe_connected").defaultTo(false);
    users.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("users");
};
