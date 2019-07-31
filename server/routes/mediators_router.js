'use strict'

/**
 * Dependencies
 */


const express = require('express');
const MediatorsController = require('../controllers/MediatorsController')
const UsersController = require('../controllers/UsersController');
const restricted = require('../middleware/restricted');

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
 *   GET /users/pending
 */

router.route('/pending')
    .all(restricted)
    .get(UsersController.mediatorRequests)


/**
 * Export router
 */

module.exports = router
