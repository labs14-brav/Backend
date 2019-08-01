'use strict'

/**
 * Dependencies
 */

const Mediator = require('../models/Mediator')
const emails = require('../initializers/emails');
const Case = require('../models/Case');
const MediatorCase = require('../models/MediatorCase');

/**
 * Define controller
 */

class MediatorsController {
  static async index(req, res) {
    try {
      const mediators = await Mediator.all(req.query)
      res.status(200).json(mediators)
    } catch(err) {
      console.error(err)
      res.status(500).json({ error: { message: 'Internal Server Error' } })
    }
  }

  static async mediatorEmail(req, res) {
    try {
      const mediator = await Mediator.find(req.params.id)
      const fetchCase = await Case.find(req.body.case_id)

      if (mediator) {
        await MediatorCase.create({mediator_id: mediator.id, case_id: fetchCase.id})
        await emails({
          mediator_email: mediator.email,
          user_email: req.body.email,
          dispute_category: fetchCase.dispute_category}
        )
        res.status(200).json({ message: 'Email sent.' })
      } else {
        res.status(404).json({ message: 'Mediator not found' })
      }
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
