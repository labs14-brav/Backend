'use strict'

/**
 * Dependencies
 */

const db = require('../../data/dbConfig')

/**
 * Define model
 */

class Addendum {
  static find_by_case_id(case_id) {
    return db('addendums').where('case_id', case_id)
  }

  static async create(addendum_fields) {
    if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging') {
      const [ids] = await db('addendums').insert({
        case_id: addendum_fields.case_id,
        description: addendum_fields.description,
      }, ['id'])

      const new_addendum = await db('addendums').where({ id: ids.id }).first()
      return new_addendum
    } else {
      const [id] = await db('addendums').insert({
        case_id: addendum_fields.case_id,
        description: addendum_fields.description,
      })

      const new_addendum = await db('addendums').where({ id: id }).first()
      return new_addendum
    }
  }
}

/**
 * Export model
 */

module.exports = Addendum
