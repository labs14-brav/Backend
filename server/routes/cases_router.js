'use strict'

/**
 * Dependencies
 */


const express = require('express')
const CasesController = require('../controllers/CasesController')

/**
 * Define router
 */

const router = express.Router()

/**
 * Routes
 *   GET,POST /cases
 */

router.route('/')
  .get(CasesController.index)
  .post(CasesController.create)

/**
 * Export router
 */

module.exports = router
