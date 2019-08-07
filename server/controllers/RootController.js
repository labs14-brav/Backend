'use strict'

/**
 * Define controller
 */

class RootController {
  static index(req, res) {
    res.status(200).json('Welcome to Brāv!')
  }
}

/**
 * Export controller
 */

module.exports = RootController
