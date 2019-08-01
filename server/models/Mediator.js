'use strict'

/**
 * Dependencies
 */

const db = require('../../data/dbConfig')

/**
 * Define model
 */

class Mediator {
  static all(query) {
    const { price, language, specialty, experience } = query
    let price_min, price_max

    let has_filters = false
    let filter = {}

    if (language) {
      filter['language'] = language
      has_filters = true
    }

    if (specialty) {
      filter['specialization'] = specialty
      has_filters = true
    }

    if (experience) {
      filter['experience'] = experience
      has_filters = true
    }

    if (price == '<25') {
      price_min = 0
      price_max = 24
      has_filters = true
    } else if (price == '25-75') {
      price_min = 25
      price_max = 75
      has_filters = true
    } else if (price == '>75') {
      price_min = 76
      price_max = 99999
      has_filters = true
    } else {
      price_min = 0
      price_max = 99999
    }

    if (has_filters) {
      return db('users').where('type', 'mediator')
        .where(filter).whereBetween('price', [price_min, price_max])
    } else {
      return db('users').where('type', 'mediator')
    }
  }

  static find(id) {
    return db('users').where('id', id).first()
  }
}

/**
 * Export model
 */

module.exports = Mediator
