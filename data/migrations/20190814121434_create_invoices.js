
exports.up = function(knex) {
    return knex.schema.createTable('invoices', table => {
        table.increments()
        table.integer('mediator_id')
        table.integer('case_id');
        table.integer('amount');
        table.integer('hours');
        table.datetime('paid_at').defaultTo(null);
        table.timestamps(true, true);
    })
  };

  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('invoices');
  };
