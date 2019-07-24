'use strict'

/**
 * Dependencies
 */


const express = require('express');
const RootController = require('../controllers/RootController');
const decodemiddleware= require('../middleware/firebasedecoder');
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
  .get(RootController.index)

//GET /users This is just to make sure data can be accessed on the FE
router.route('/users')
  .get(RootController.findUsers)

router.route('/users/auth')
  .all(decodemiddleware)
  .post(RootController.auth)

//Used to test restricted Middleware
// router.route('/test')
//   .all(restrictedMiddleware)
//   .get(RootController.test)

/**
 * Export router
 */

module.exports = router



