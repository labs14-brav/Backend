'use strict'

/**
 * Dependencies
 */

const db = require('../../data/dbConfig')

/**
 * Define model
 */

class User {
  static all(offset=0) {
    return db('users').limit(10).offset(offset)
  }

  static async deactivate(email) {
    if (email) {
      return db('users').where('email', email).update({ deactivated_at: new Date() })
    }
  }
}

/**
 * Export model
 */

module.exports = User
