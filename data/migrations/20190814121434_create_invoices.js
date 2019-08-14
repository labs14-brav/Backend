
exports.up = function(knex) {
    return knex.schema.createTable('invoices', table => {
        table.increments()
        table.integer('mediator_id')
        table.timestamps(true, true);
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('mediator_cases');
  };