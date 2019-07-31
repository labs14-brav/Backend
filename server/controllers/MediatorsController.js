'use strict'

/**
 * Dependencies
 */

const Mediator = require('../models/Mediator')

/**
 * Define controller
 */

class MediatorsController {
  static async index(req, res) {
    try {
      const mediators = await Mediator.all()
      res.status(200).json(mediators)
    } catch(err) {
      console.error(err)
      res.status(500).json({ error: { message: 'Internal Server Error' } })
    }
  }
}

/**
 * Export controller
 */

module.exports = MediatorsController
