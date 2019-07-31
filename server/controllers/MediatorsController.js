'use strict'

/**
 * Dependencies
 */

const Mediator = require('../models/Mediator')
const emails = require('../initializers/emails');

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

  static async mediatorEmail(req, res) {
    try {
      await emails({
        mediator_email: 'labs14brav@gmail.com',
        user_email: 'labs14brav@gmail.com',
        dispute_category: 'Death'}
      )
      res.status(200).json({ message: 'Email sent.' })
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
