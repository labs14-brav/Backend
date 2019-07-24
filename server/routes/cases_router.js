'use strict'

/**
 * Dependencies
 */


const express = require('express')
const CasesController = require('../controllers/CasesController')
const decodemiddleware = require('../middleware/firebasedecoder')

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
  .post(CasesController.create)

/**
 * Export router
 */

module.exports = router
