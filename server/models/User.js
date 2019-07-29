'use strict'

/**
 * Dependencies
 */

const db = require('../../data/dbConfig')

/**
 * Define model
 */

class User {
  static all() {
    return db('users')
  }
}

/**
 * Export model
 */

module.exports = User
