"use strict";

/**
 * Dependencies
 */

const db = require("../../data/dbConfig");

/**
 * Define model
 */

class Mediator {
  static all(query) {
    const { price, language, specialization, experience } = query;
    let price_min, price_max;

    let has_filters = false;
    let has_lang_filter = false;
    let has_specialization_filter = false;
    let filter = {};

    if (language) {
      has_lang_filter = true;
      has_filters = true;
    }

    if (specialization) {
      has_specialization_filter = true;
      has_filters = true;
    }

    if (experience) {
      filter["experience"] = experience;
      has_filters = true;
    }

    if (price == "<25") {
      price_min = 0;
      price_max = 24;
      has_filters = true;
    } else if (price == "25-75") {
      price_min = 25;
      price_max = 75;
      has_filters = true;
    } else if (price == ">75") {
      price_min = 76;
      price_max = 99999;
      has_filters = true;
    } else {
      price_min = 0;
      price_max = 99999;
    }

    if (has_filters && has_lang_filter && has_specialization_filter) {
      return db("users")
        .where("type", "mediator")
        .where(filter)
        .where("language", "like", `%${language}%`)
        .where("specialization", "like", `%${specialization}%`)
        .whereBetween("price", [price_min, price_max]);
    }
    if (has_filters && has_lang_filter) {
      return db("users")
        .where("type", "mediator")
        .where(filter)
        .where("language", "like", `%${language}%`)
        .whereBetween("price", [price_min, price_max]);
    } else if (has_filters && has_specialization_filter) {
      return db("users")
        .where("type", "mediator")
        .where(filter)
        .where("specialization", "like", `%${specialization}%`)
        .whereBetween("price", [price_min, price_max]);
    } else if (has_filters) {
      return db("users")
        .where("type", "mediator")
        .where(filter)
        .whereBetween("price", [price_min, price_max]);
    } else {
      return db("users").where("type", "mediator");
    }
  }

  static find(id) {
    return db("users")
      .where("id", id)
      .first();
  }

  static getUserByEmail(email) {
    return db("users")
      .where("email", email)
      .first();
  }

  static saveStripeUserId(email, stripeUserId) {
    return db("users")
      .where({ email: email })
      .update({ stripe_user_id: stripeUserId, is_stripe_connected: true });
  }
}

/**
 * Export model
 */

module.exports = Mediator;
