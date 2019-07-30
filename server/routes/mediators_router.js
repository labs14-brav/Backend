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
 *   GET /
 */

router.route('/')
    .all(restricted)
    .get(UsersController.fetchMediators)

router.route('/pending')
    .all(restricted)
    .get(UsersController.mediatorRequests)


/**
 * Export router
 */

module.exports = router