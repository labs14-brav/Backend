'use strict'

/**
 * Dependencies
 */


const express = require('express')
const CasesController = require('../controllers/CasesController')
const decodemiddleware = require('../middleware/firebasedecoder')
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
  .all(decodemiddleware)
  .get(CasesController.index)
  .all(require_body(['description', 'dispute_category']))
  .post(CasesController.create)

/**
 * Export router
 */

module.exports = router
