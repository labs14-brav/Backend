'use strict'

/**
 * Dependencies
 */

const express = require('express');
const UsersController = require('../controllers/UsersController');
const RootController = require('../controllers/RootController');
const restricted = require('../middleware/restricted');
const adminAuth = require('../middleware/adminAuth');

/**
 * Define router
 */

const router = express.Router()

/**
 * GET /users
 */

router.route('/')
  .get(UsersController.index)

/**
 * POST /users/auth
 */

router.route('/auth')
  .all(restricted)
  .post(RootController.auth)

/**
 * Routes
 *   PUT /users/:id/mediator-upgrade
 */

router.route('/:id/mediator-upgrade')
  .put(UsersController.mediatorUpgrade)

/**
 * Routes
 *   PUT /users/:id/mediator-request-accepted
 */

router.route('/:id/mediator-request-accepted')
    .all(restricted)
    .all(adminAuth)
    .put(UsersController.approveMediator)

/**
 * Routes
 *   PUT /users/:id/mediator-request-declined
 */

router.route('/:id/mediator-request-declined')
    .all(restricted)
    .all(adminAuth)
    .put(UsersController.declineMediator)

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
