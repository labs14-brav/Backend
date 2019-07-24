'use strict'

/**
 * Dependencies
 */


const express = require('express');

/**
 * Define router
 */

const router = express.Router()

/**
 * Routes
 *   GET /cases
 */

router.route('/')
  .get((req, res) => {
    res.status(200).json({ message: 'Cases' })
  })

/**
 * Export router
 */

module.exports = router
