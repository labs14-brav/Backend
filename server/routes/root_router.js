'use strict'

/**
 * Dependencies
 */

const express = require('express')
const RootController = require('../controllers/RootController')

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

//GET /users This is just to make sure data can be accessed on the FE
router.route('/users')
  .get(RootController.findUsers)

router.route('/users/signup')
  .post(RootController.signup)

router.route('/users/signin')
  .post(RootController.signin)
  

/**
 * Export router
 */

module.exports = router
