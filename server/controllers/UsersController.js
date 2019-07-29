'use strict'

/**
 * Dependencies
 */

const User = require('../models/User')

/**
 * Define controller
 */

class UsersController {
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
