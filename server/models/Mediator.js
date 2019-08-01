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

    return db('users').where('type', 'mediator')
  }

  static find(id) {
    return db('users').where('id', id).first()
  }
}

/**
 * Export model
 */

module.exports = Mediator
