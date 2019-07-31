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

  static getUserById(id) {
    return db('users').where('id', id).first()
  }

  static getUserByEmail(email) {
    return db('users').where('email', email).first()
  }

  static async create(user) {
    if (process.env.NODE_ENV == 'production' || process.env.NODE_ENV === 'staging') {
      const [ids] = await db('users').insert({
        email: user.email,
        uid: user.uid,
      },['id'])
      return ids.id
    } else {
      const [id] = await db('users').insert({
        email: user.email,
        uid: user.uid,
      })
      return id
    }
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
