'use strict'

/**
 * Dependencies
 */

const Addendum = require('../models/Addendum')

/**
 * Define controller
 */

class AddendumsController {
  static async create(req, res) {
    try {
      const new_addendum = await Addendum.create({
        case_id: req.params.id,
        description: req.body.description
      })

      res.status(201).json(new_addendum)
    } catch(err) {
      console.error(err)
      res.status(500).json({ error: { message: 'Internal Server Error' } })
    }
  }
}

/**
 * Export controller
 */

module.exports = AddendumsController
