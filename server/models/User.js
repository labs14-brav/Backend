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
      }, ['id'])
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

  // returns an array of objects from users with type: mediator
  static fetchMediators() {
    return db('users').where('type', 'mediator')
  }

  //for admin use to approve a pending mediator, returns the updated user object
  static async approveMediator(id, update) {
    await db('users').where('id', id).update(update)
    return db('users').where('id', id).first()
  }

  //for admin use to decline a pending mediator, returns the updated user object
  static async declineMediator(id, update) {
    await db('users').where('id', id).update(update)
    return db('users').where('id', id).first()
  }

  static async editUser(id, update) {
    await db('users').where('id', id).update(update);
    return db('users').where('id', id).first();
  }

  /**
   * ADMIN USE
   */

  // returns an array of objects from users with type: pending_mediator
  static mediatorRequests() {
    return db('users').where('type', 'pending_mediator')
  }
}

/**
 * Export model
 */

module.exports = User
