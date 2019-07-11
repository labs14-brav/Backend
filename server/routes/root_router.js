'use strict'

/**
 * Dependencies
 */

const express = require('express')
const RootController = require('../controllers/RootController')

/**
 * Define router
 */

const router = express.Router()

/**
 * Routes
 *   GET /
 */

router.route('/')
  .get(RootController.index)


router.route('/users')
  .get(RootController.findUsers)
/**
 * Export router
 */

module.exports = router
