'use strict'

/**
 * Dependencies
 */


const express = require('express')
const CasesController = require('../controllers/CasesController')
const restricted = require('../middleware/restricted')
const require_body = require('../middleware/require_body')

/**
 * Define router
 */

const router = express.Router()

/**
 * Routes
 *   GET,POST /cases
 */

router.route('/')
  .all(restricted)
  .get(CasesController.index)
  .all(require_body(['description', 'dispute_category']))
  .post(CasesController.create)

/**
 * Routes
 *   GET /cases/:id
 */

router.route('/')
  .all(restricted)
  .get(CasesController.show)

/**
 * Routes
 *   POST /cases/:id/addendums
 */

router.route('/')
  .all(restricted)
  .all(require_body(['description']))
  .post(AddendumsController.create)

/**
 * Export router
 */

module.exports = router
