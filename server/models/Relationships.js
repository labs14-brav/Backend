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

  static async create(user_id, mediator_id) {
    if (
      process.env.NODE_ENV === "production" ||
      process.env.NODE_ENV === "staging"
    ) {
      const relationship = await db("relationships")
        .insert({ user_id, mediator_id })
        .returning("*");

      // postgreSQL returns the object inside of an object. This will return the med object that we want.
      return relationship["0"];
    } else {
      const [id] = await db("relationships").insert({ user_id, mediator_id });
      if (id) {
        const new_relationship = await db("relationships")
          .where({ id })
          .first();
        return new_relationship;
      }
    }
  }
}

/**
 * Export model
 */

module.exports = Relationships;
