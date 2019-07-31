"use strict";

exports.up = function(knex) {
  return knex.schema.createTable("cases", table => {
    table.increments("id");
    table.text("user_email");
    table.text("user_uid");
    table.text("description");
    table.text("dispute_category");
    table.text("parties_involved");
    table.text("case_accepted_at");
    table.text("case_declined_at");
    table.text("case_completed_at");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("cases");
};
