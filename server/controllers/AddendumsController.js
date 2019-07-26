'use strict'

/**
 * Dependencies
 */

// const Addendum = require('../models/Addendum')

/**
 * Define controller
 */

class AddendumsController {
  static async create(req, res) {
    try {
      // const new_addendum = await Addendum.create(req.body)

      res.status(201).json({})
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
