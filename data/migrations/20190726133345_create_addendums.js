'use strict'

exports.up = function(knex) {
  return knex.schema.createTable('addendums', table => {
    table.increments();
    table.integer('case_id');
    table.text('description');
    table.timestamps();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('addendums');
};
