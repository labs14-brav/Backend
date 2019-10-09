/**
 * Dependencies
 */

const db = require("../../data/dbConfig");

/**
 * Define model
 */

class Relationships {
  static find() {
    return db("relationships");
  }

  static findById(id) {
    return db("relationships")
      .where({ id })
      .first();
  }
}

/**
 * Export model
 */

module.exports = Relationships;
