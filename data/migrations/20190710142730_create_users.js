exports.up = function (knex) {
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
    users.text("mediator_declined_at");
    users.text("city");
    users.text("state");
    users.text("stripe_user_id");
    users.text("is_stripe_connected").defaultTo(false);
    users.boolean("is_onboarded").defaultTo(false);
    users.text("profile_image");
    users.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("users");
};
