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
 * GET /
 */

router.route('/')
  .get(RootController.findUsers)


/**
 * POST /
 */
router.route('/auth')
.all(restricted)
.post(RootController.auth)


/**
 * Routes
 *   PUT /
 */
router.route('/users/:id/mediator-upgrade')
  .put(RootController.mediatorUpgrade)

router.route('/:id/mediator-request-accepted')
    .all(restricted)
    .all(adminAuth)
    .put(UsersController.approveMediator)

router.route('/:id/mediator-request-declined')
    .all(restricted)
    .all(adminAuth)
    .put(UsersController.declineMediator)
/**
 * Export router
 */

module.exports = router