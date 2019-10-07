exports.up = function(knex) {
  return knex.schema.createTable("relationships", relationships => {
    relationships.increments();
    relationships
      .string("user_id", 128)
      .references("users.uid")
      .notNullable()
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    relationships
      .string("mediator_id", 128)
      .references("users.id")
      .notNullable()
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    relationships.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("relationships");
};
