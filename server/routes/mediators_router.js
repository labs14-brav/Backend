'use strict'

/**
 * Dependencies
 */


const express = require('express');
const UsersController = require('../controllers/UsersController');
const restrictedMiddleware = require('../middleware/restricted');

/**
 * Define router
 */

const router = express.Router()

/**
 * Routes
 *   GET /
 */

router.route('/')
    .all(restrictedMiddleware)
    .get(UsersController.fetchMediators)

router.route('/pending')


/**
 * Export router
 */

module.exports = router