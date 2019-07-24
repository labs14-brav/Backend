'use strict'

/**
 * Define controller
 */

class CasesController {
  static index(req, res) {
    res.status(200).json([])
  }

  static create(req, res) {
    res.status(200).json({})
  }
}

/**
 * Export controller
 */

module.exports = CasesController
