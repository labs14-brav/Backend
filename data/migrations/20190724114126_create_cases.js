"use strict";

exports.up = function(knex) {
  return knex.schema.createTable("cases", table => {
    table.increments();
    table.text("case_completed_at");
    table.text("user_email");
    table.text("user_uid");
    table.text("description");
    table.text("dispute_category");
    table.text("dispute_amount");
    table.text("case_initiator");
    table.text("parties_involved");
    table.text("parties_contact_info");
    table.boolean("court_case"); //this is the important check for whether or not a case is a court referral
    table.text("court_jurisdiction");
    table.text("court_number");
    table.text("court_filing_date");
    table.text("case_notes");
    table.text("case_accepted_at");
    table.text("case_declined_at");
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("cases");
};
