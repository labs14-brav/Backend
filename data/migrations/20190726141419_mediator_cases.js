
exports.up = function(knex) {
  return knex.schema.createTable('mediator_cases', table => {
      table.increments('mediator_id')
      table.integer('case_id')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('mediator_cases');
};
