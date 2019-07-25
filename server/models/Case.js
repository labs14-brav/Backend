'use strict'

/**
 * Dependencies
 */

const db = require('../../data/dbConfig')

/**
 * Define model
 */

class Case {
  static all() {
    return db('cases')
  }

  static async create(case_fields) {
    if (process.env.NODE_ENV === 'production') {
      const [ids] = await db('cases').insert({
        description: case_fields.description
      }, ['id'])

      const new_case = await db('cases').where({ id: ids.id }).first()
      return new_case
    } else {
      const [id] = await db('cases').insert({
        description: case_fields.description
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
