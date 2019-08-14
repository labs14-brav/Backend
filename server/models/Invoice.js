"use strict";

/**
 * Dependencies
 */

const db = require("../../data/dbConfig");

/**
 * Define model
 */

 class Invoice {
    static find(id) {
        return db("invoices")
          .where("id", id)
          .first();
      }

      static create(invoice) {
        return db('invoices').insert(invoice)
      }

      static findByCaseId(case_id) {
        return db("invoices")
          .where("case_id", case_id)
      }
}

/**
 * Export model
 */

module.exports = Invoice
