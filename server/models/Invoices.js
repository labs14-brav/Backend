"use strict";

/**
 * Dependencies
 */

const db = require("../../data/dbConfig");

/**
 * Define model
 */

 class Invoices {
    static find(id) {
        return db("invoices")
          .where("id", id)
          .first();
      }

      static create(invoice) {
        return db('invoices').insert(invoice)
      }

 }

 module.exports = Invoices