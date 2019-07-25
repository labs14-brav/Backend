'use strict'

exports.up = function(knex) {
  return knex.schema.createTable('cases', table => {
    table.increments('id');
    table.text('user_email');
    table.text('user_uid');
    table.text('description');
    table.text('dispute_category');
    table.text('parties_involved');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cases');
};