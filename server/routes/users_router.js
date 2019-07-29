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
 *   GET /users/mediators
 */

router.route('/mediators')
    .all(restricted)
    .get(UsersController.fetchMediators)

/**
 * Routes
 *   PUT /users/:id/deactivate
 */

router.route('/:id/deactivate')
  .all(restricted)
  .put(UsersController.deactivate)

/**
 * Export router
 */

module.exports = router
