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

//GET /users This is just to make sure data can be accessed on the FE
router.route('/users')
  .get(RootController.findUsers)

router.route('/users/auth')
  .all(restricted)
  .post(RootController.auth)


  


router.route('/users/:id/mediator-upgrade')
  .put(RootController.mediatorUpgrade)
  

/**
 * Export router
 */

module.exports = router
