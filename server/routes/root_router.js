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


/**
 * Routes
 *   POST /users/auth
 */
/**
 * Routes
 *   PUT /users/:id/mediator-upgrade
 */


/**
 * Export router
 */

module.exports = router
