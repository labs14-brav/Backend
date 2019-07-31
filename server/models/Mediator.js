'use strict'

/**
 * Dependencies
 */

const db = require('../../data/dbConfig')

/**
 * Define model
 */

class Mediator {
  static all() {
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
