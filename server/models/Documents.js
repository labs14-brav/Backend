"use strict";

/**
 * Dependencies
 */

const db = require("../../data/dbConfig");

/**
 * Define model
 */

 class Documents {
 
  static create(document) {
    return db('documents').insert(document)
  }

  static findByCaseId(case_id) {
    return db("documents")
      .where("case_id", case_id)
  }


}

/**
 * Export model
 */

module.exports = Documents