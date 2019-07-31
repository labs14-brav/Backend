"use strict";

/**
 * Dependencies
 */

const db = require("../../data/dbConfig");

/**
 * Define model
 */

class Case {
  static all(email) {
    if (email) {
      return db("cases").where("user_email", email);
    } else {
      return db("cases");
    }
  }

  static find(id) {
    return db("cases")
      .where("id", id)
      .first();
  }

  static findById(id) {
    return db("cases")
      .where({ id: id })
      .first();
  }

  static async create(case_fields) {
    if (
      process.env.NODE_ENV === "production" ||
      process.env.NODE_ENV === "staging"
    ) {
      const [ids] = await db("cases").insert(
        {
          user_uid: case_fields.uid,
          user_email: case_fields.email,
          description: case_fields.description,
          dispute_category: case_fields.dispute_category,
          parties_involved: case_fields.parties_involved
        },
        ["id"]
      );

      const new_case = await db("cases")
        .where({ id: ids.id })
        .first();
      return new_case;
    } else {
      const [id] = await db("cases").insert({
        user_uid: case_fields.uid,
        user_email: case_fields.email,
        description: case_fields.description,
        dispute_category: case_fields.dispute_category,
        parties_involved: case_fields.parties_involved
      });

      const new_case = await db("cases")
        .where({ id: id })
        .first();
      return new_case;
    }
  }

  //for admin use to approve a pending mediator, returns the updated user object
  static async acceptCase(id, update) {
    const approved = await db("cases")
      .where("id", id)
      .update(update);
    return db("cases")
      .where("id", id)
      .first();
  }

  //for admin use to decline a pending mediator, returns the updated user object
  static async declineCase(id, update) {
    const declined = await db("cases")
      .where("id", id)
      .update(update);
    return db("cases")
      .where("id", id)
      .first();
  }

  static async findPendingCases() {
    const acceptedCases = await db("cases")
      .whereNull("case_accepted_at")
      .whereNull("case_declined_at");
    return acceptedCases;
  }

  static async findAcceptedCases() {
    const acceptedCases = await db("cases").whereNotNull("case_accepted_at");
    return acceptedCases;
  }

  static async findDeclinedCases() {
    console.log("accepted cases");
    const declinedCases = await db("cases").whereNotNull("case_declined_at");
    return declinedCases;
  }
}

/**
 * Export model
 */

module.exports = Case;
