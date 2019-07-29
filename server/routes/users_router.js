'use strict'

/**
 * Dependencies
 */


const express = require('express');
const UsersController = require('../controllers/UsersController');
const restricted = require('../middleware/restricted');

/**
 * Define router
 */

const router = express.Router()

/**
 * Routes
 *   PUT /
 */
router.route('/:id/mediator-request-accepted')
    .all(restricted)
    .put(UsersController.approveMediator)

router.route('/:id/mediator-request-declined')
    .all(restricted)
    .put(UsersController.declineMediator)
/**
 * Export router
 */

module.exports = router