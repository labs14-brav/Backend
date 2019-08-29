"use strict";
const require_body = require("../middleware/require_body");

/**
 * Dependencies
 */

const express = require("express");
const InvoicesController = require("../controllers/InvoicesController");
const restricted = require("../middleware/restricted");

/**
 * Define router
 */

const router = express.Router();

router.route("/")
  .all(restricted)
  .get(InvoicesController.index)

router.route("/:id/session")
  .get(InvoicesController.sessions)

router.route("/:id")
  .all(restricted)
  .get(InvoicesController.getById)
  .put(InvoicesController.payed)

router.route("/:id/charge")
  .all(restricted)
  .all(require_body(["stripeToken"]))
  .post(InvoicesController.charge)

router.route("/case/:id")
  .all(restricted)
  .get(InvoicesController.getByCaseId)
  .all(require_body(["mediator_id","amount","hours"]))
  .post(InvoicesController.create)

/**
 * Export router
 */

module.exports = router;
