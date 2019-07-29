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
}

/**
 * Export model
 */

module.exports = Mediator
