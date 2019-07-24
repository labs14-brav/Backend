'use strict'

/**
 * Dependencies
 */


const express = require('express');
const UsersController = require('../controllers/UsersController');
const decodemiddleware= require('../middleware/firebasedecoder');

/**
 * Define router
 */

const router = express.Router()

/**
 * Routes
 *   GET /
 */

router.route('/mediators')
    .get(UsersController.fetchMediators)

/**
 * Export router
 */

module.exports = router