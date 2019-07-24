'use strict'

/**
 * Dependencies
 */

const Case = require('../models/Case')

/**
 * Define controller
 */

class CasesController {
  static async index(req, res) {
    try {
      const cases = await Case.all()

      res.status(200).json(cases)
    } catch(err) {
      console.error(err)
      res.status(500).json({ error: { message: 'Internal Server Error' } })
    }
  }

  static async create(req, res) {
    try {
      const new_case = await Case.create(req.body)

      res.status(201).json(new_case)
    } catch(err) {
      console.error(err)
      res.status(500).json({ error: { message: 'Internal Server Error' } })
    }
  }
}

/**
 * Export controller
 */

module.exports = CasesController
