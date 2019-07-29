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

  static fetchMediators() {
    return db('users').where('type', 'mediator')
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
