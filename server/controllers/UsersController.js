'use strict'

/**
 * Dependencies
 */

const User = require('../models/User')

/**
 * Define controller
 */

class UsersController {
  static async fetchMediators(req, res) {
    try {
        let mediators = await User.fetchMediators()
        if (mediators) {
          //console.log('Inside fetchMediators');
          res.status(200).json(mediators);
        } else {
          res.status(500).json({message: 'Internal Server Error'})
        }
    } catch(err) {
        console.error(err);
        res.status(500).json({message: 'Internal Server Error'});
    }
  }

  static async deactivate(req, res) {
    try {
      await User.deactivate(req.body.email)
      res.status(200).json({ message: 'Successfully deactivated your account.' })
    } catch(err) {
      console.error(err)
      res.status(500).json({ error: { message: 'Internal Server Error' }})
    }
  }
}

/**
 * Export controller
 */

module.exports = UsersController
