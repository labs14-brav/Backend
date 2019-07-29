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
    res.status(200).json()
  }
}

/**
 * Export controller
 */

module.exports = UsersController
