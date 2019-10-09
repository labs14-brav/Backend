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

  static async update(id, updates) {
    if (
      process.env.NODE_ENV === "production" ||
      process.env.NODE_ENV === "staging"
    ) {
      const [relationship] = await db("relationships")
        .where({ id })
        .update(updates)
        .returning("*");
      return relationship;
    } else {
      const editedRelationship = await db("relationships")
        .where({ id })
        .update(updates);
      if (editedRelationship) {
        const relationship = await this.findById(id);
        return relationship;
      }
    }
  }

  static async remove(id) {
    if (
      process.env.NODE_ENV === "production" ||
      process.env.NODE_ENV === "staging"
    ) {
      const [relationship] = await db("relationships")
        .where({ id })
        .del()
        .returning("*");
      return relationship;
    } else {
      const relationship = await this.findById(id);
      if (relationship) {
        const removed = await db("relationships")
          .where({ id })
          .del();
        if (removed) {
          return relationship;
        }
      }
    }
  }
}

/**
 * Export model
 */

module.exports = Relationships;
