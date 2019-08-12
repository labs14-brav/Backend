"use strict";

/**
 * Dependencies
 */

const express = require("express");
const MediatorsController = require("../controllers/MediatorsController");
const UsersController = require("../controllers/UsersController");
const restricted = require("../middleware/restricted");
const require_body = require("../middleware/require_body");

/**
 * Define router
 */

const router = express.Router();

/**
 * Routes
 *   GET /mediators
 */

router
  .route("/")
  .all(restricted)
  .get(MediatorsController.index);

/**
 * Routes
 *   GET /mediators/pending
 */

//  For admin getting all requests for mediator requests
router
  .route("/pending")
  .all(restricted)
  .get(UsersController.mediatorRequests);

router
  .route("/stripe-connect")
  .all(restricted)
  .post(MediatorsController.stripeConnect);

/**
 * Routes
 *   POST /mediators/:id/cases
 */

router
  .route("/:id/cases")
  .all(restricted)
  .all(require_body(["case_id"]))
  .post(MediatorsController.mediatorEmail);

/**
 * Export router
 */

module.exports = router;
