'use strict'

/**
 * Dependencies
 */


const express = require('express')
const UsersController = require('../controllers/UsersController')
const restricted = require('../middleware/restricted')

/**
 * Define router
 */

const router = express.Router()

/**
 * Routes
 *   PUT /users/deactivate
 */

router.route('/deactivate')
  .all(restricted)
  .put(UsersController.deactivate)

/**
 * Export router
 */

module.exports = router
