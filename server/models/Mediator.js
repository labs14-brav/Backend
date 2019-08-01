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

    let filter = {}

    if (language) filter['language'] = language
    if (specialty) filter['specialization'] = specialty
    if (experience) filter['experience'] = experience

    if (price == '<25') {
      filter['price'] =
    } else if (price == '25-75') {
      filter['price'] =
    } else if (price == '>75') {
      filter['price'] =
    }

    return db('users').where('type', 'mediator').where(filter)
  }

  static find(id) {
    return db('users').where('id', id).first()
  }
}

/**
 * Export model
 */

module.exports = Mediator
