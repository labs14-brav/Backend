'use strict'

/**
 * Dependencies
 */


const express = require('express')
const MediatorsController = require('../controllers/MediatorsController')
const restricted = require('../middleware/restricted')

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
 * Export router
 */

module.exports = router
