"use strict";

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

router
  .route("/")
  .all(restricted)
  .get(InvoicesController.index);

router
  .route("/:id/session")
  .all(restricted)
  .get(InvoicesController.session);

module.exports = router;
