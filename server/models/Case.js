'use strict'

/**
 * Dependencies
 */

const db = require('../../data/dbConfig')

/**
 * Define model
 */

class Case {

  //grabs cases tied to a user email
  static all(email) {
    if (email) {
      return db('cases').where('user_email', email)
    } else {
      return db('cases')
    }
  }

  //find a case with id
  static find(id) {
    return db('cases').where('id', id).first()
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
        dispute_amount: case_fields.dispute_amount,
        parties_involved: case_fields.parties_involved,
        parties_contact_info: case_fields.parties_contact_info,
        court_case: case_fields.court_case,
        court_filing_date: case_fields.court_filing_date,
        court_jurisdiction: case_fields.court_jurisdiction,
        court_number: case_fields.court_number,
        case_notes: case_fields.case_notes,
      }, ['id'])

      const new_case = await db('cases').where({ id: ids.id }).first()
      return new_case
    } else {
      const [id] = await db('cases').insert({
        user_uid: case_fields.uid,
        user_email: case_fields.email,
        description: case_fields.description,
        dispute_category: case_fields.dispute_category,
        dispute_amount: case_fields.dispute_amount,
        parties_involved: case_fields.parties_involved,
        parties_contact_info: case_fields.parties_contact_info,
        court_case: case_fields.court_case,
        court_filing_date: case_fields.court_filing_date,
        court_jurisdiction: case_fields.court_jurisdiction,
        court_number: case_fields.court_number,
        case_notes: case_fields.case_notes,
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
