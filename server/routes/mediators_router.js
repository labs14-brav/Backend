'use strict'

/**
 * Dependencies
 */

const express = require('express')
const MediatorsController = require('../controllers/MediatorsController')
const UsersController = require('../controllers/UsersController')
const restricted = require('../middleware/restricted')

/**
 * Define router
 */

const router = express.Router()

/**
 * Routes
 *   GET /mediators
 */

router.route('/')
  .all(restricted)
  .get(MediatorsController.index)

/**
 * Routes
 *   GET /mediators/pending
 */

//  For admin getting all requests for mediator requests
router.route('/pending')
  .all(restricted)
  .get(UsersController.mediatorRequests)

/**
 * Routes
 *   POST /mediators/:id/cases
 */

router.route('/:id/cases')
    .all(restricted)
    .post(MediatorsController.mediatorEmail)

/**
 * Export router
 */

module.exports = router
