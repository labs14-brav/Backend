'use strict'

/**
 * Dependencies
 */

const db = require('../../data/dbConfig')

/**
 * Define model
 */

class Case {
  static async all() {
    return await db('cases')
  }

  static async create(case) {
    if (process.env.NODE_ENV === 'production') {
      const [ids] = await db('cases').insert({
        description: case.description
      }, ['id'])

      const new_case = await db('cases').where({ id: ids.id }).first()
      return new_case
    } else {
      const [id] = await db('cases').insert({
        description: case.description
      })

      const new_case = await db('cases').where({ id: id }).first()
      return new_case
    }
  }
}

/**
 * Export model
 */

module.exports = Case
