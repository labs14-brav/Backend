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

router.route("/").get(InvoicesController.index);

router.route("/:id/session").get(InvoicesController.sessions);

module.exports = router;
