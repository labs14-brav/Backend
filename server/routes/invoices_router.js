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

router.route("/").get(InvoicesController.index);

router.route("/:id/session").get(InvoicesController.sessions);

router.route("/:id/invoice")
  .all(restricted)
  .all(require_body(["mediator_id","case_id","amount","hours"]))
  .post(InvoicesController.create)

  router.route("/:id").get(InvoicesController.getById);

  router.route("/case/:id").get(InvoicesController.getByCaseId);



module.exports = router;
