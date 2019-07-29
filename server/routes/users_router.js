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
    
router.route('/:id/mediator-request-declined')
    .all(restricted)
/**
 * Export router
 */

module.exports = router