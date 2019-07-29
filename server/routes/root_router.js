'use strict'

/**
 * Dependencies
 */


const express = require('express');
const RootController = require('../controllers/RootController');
const restricted = require('../middleware/restricted');

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

/**
 * Routes
 *   GET /users
 */

router.route('/users')
  .get(RootController.findUsers)

/**
 * Routes
 *   POST /users/auth
 */

router.route('/users/auth')
  .all(restricted)
  .post(RootController.auth)

/**
 * Routes
 *   PUT /users/:id/mediator-upgrade
 */

router.route('/users/:id/mediator-upgrade')
  .put(RootController.mediatorUpgrade)

/**
 * Export router
 */

module.exports = router
