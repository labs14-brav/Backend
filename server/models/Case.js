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
  static findById(id){
    return db('cases').where({ id: id }).first();
  }

  static async create(case_fields) {
    if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging') {
      const [ids] = await db('cases').insert({
        user_uid: case_fields.uid,
        user_email: case_fields.email,
        description: case_fields.description,
        dispute_category: case_fields.dispute_category,
        parties_involved: case_fields.parties_involved
      }, ['id'])

      const new_case = await db('cases').where({ id: ids.id }).first()
      return new_case
    } else {
      const [id] = await db('cases').insert({
        user_uid: case_fields.uid,
        user_email: case_fields.email,
        description: case_fields.description,
        dispute_category: case_fields.dispute_category,
        parties_involved: case_fields.parties_involved
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
