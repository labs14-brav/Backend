'use strict'

/**
 * Dependencies
 */

const express = require('express');
const UsersController = require('../controllers/UsersController');
const restricted = require('../middleware/restricted');
const adminAuth = require('../middleware/adminAuth');
const require_body = require('../middleware/require_body');

/**
 * Define router
 */

const router = express.Router()

/**
 * Routes
 *   GET /users
 */

router.route('/')
  .get(UsersController.index)

/**
 * Routes
 *   POST /users/auth
 */

router.route('/auth')
  .all(restricted)
  .post(UsersController.auth)

/**
 * Routes
 *   PUT /users/deactivate
 */

router.route('/deactivate')
 .all(restricted)
 .put(UsersController.deactivate)

/**
 * Routes
 *   PUT /users/:id/mediator-upgrade
 */

router.route('/:id/mediator-upgrade')
  .all(require_body(["experience","license","specialization","language","professional_bio","name","price"]))
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
 * Export router
 */

module.exports = router
