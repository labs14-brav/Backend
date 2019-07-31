'use strict'

/**
 * Dependencies
 */

const db = require('../../data/dbConfig')

/**
 * Define model
 */

class MediatorCase {
  static create({mediator_id, case_id}) {
    return db('mediator_cases').insert({mediator_id, case_id})
  }
}

/**
 * Export model
 */

module.exports = MediatorCase
