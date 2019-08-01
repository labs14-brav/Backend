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

    let filter = {}

    if (language) filter['language'] = language
    if (specialty) filter['specialization'] = specialty
    if (experience) filter['experience'] = experience

    if (price == '<25') {
      price_min = 0
      price_max = 25
    } else if (price == '25-75') {
      price_min = 25
      price_max = 75
    } else if (price == '>75') {
      price_min = 75
      price_max = 99999
    } else {
      price_min = 0
      price_max = 99999
    }

    const results = db('users').where('type', 'mediator')
      .where(filter).whereBetween('price', [price_min, price_max])

    return db('users').where('type', 'mediator')
      .where(filter).whereBetween('price', [price_min, price_max])
  }

  static find(id) {
    return db('users').where('id', id).first()
  }
}

/**
 * Export model
 */

module.exports = Mediator
