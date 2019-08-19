"use strict";

/**
 * Dependencies
 */

const db = require("../../data/dbConfig");

/**
 * Define model
 */

 class Invoice {
  static all() {
    return db("invoices")
  }

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

  static payed(id) {
    return db("invoices").where("id", id).update({ paid_at: new Date() })
  }
}

/**
 * Export model
 */

module.exports = Invoice
