
exports.up = function(knex) {
    return knex.schema.createTable('invoices', table => {
        table.increments()
        table.integer('mediator_id');
        table.string('stripe_user_id');
        table.integer('case_id');
        table.integer('amount');
        table.integer('hours');
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('invoices');
  };