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
      const cases = await Case.all(req.body.email)

      return res.status(200).json(cases)
    } catch(err) {
      console.error(err)
      return res.status(500).json({ error: { message: 'Internal Server Error' } })
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

  static async show(req, res) {
    try {
      const fetched_case = await Case.find(req.params.id)

      if (fetched_case) {
        res.status(200).json(fetched_case)
      } else {
        res.status(404).json({ errer: { message: 'Not Found' }})
      }
    } catch(err) {
      console.error(err)
      return res.status(500).json({ error: { message: 'Internal Server Error' } })
    }
  }
}

/**
 * Export controller
 */

module.exports = CasesController
