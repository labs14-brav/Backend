'use strict'

/**
 * Define controller
 */

class RootController {
  static index(req, res) {
    res.status(200).json()
  }
}

/**
 * Export controller
 */

module.exports = RootController
