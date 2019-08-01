"use strict";

/**
 * Dependencies
 */

const express = require("express");
const CasesController = require("../controllers/CasesController");
const AddendumsController = require("../controllers/AddendumsController");
const restricted = require("../middleware/restricted");
const require_body = require("../middleware/require_body");

/**
 * Define router
 */

const router = express.Router();

/**
 * Routes
 *   GET,POST /cases
 */

router
  .route("/")
  .all(restricted)
  .get(CasesController.index)
  .all(require_body(["dispute_category"]))
  .post(CasesController.create);

  ///temp to get all cases
router
  .route("/all")
  .get(CasesController.all);

  /**
   * Routes
   *   GET /cases/:id
   */

router.route("/:id").get(CasesController.indexById);


router
.route("/:id/pending-cases")
.all(restricted)
.get(CasesController.getPendingCases);

router
.route("/accepted-cases")
.all(restricted)
.get(CasesController.getAcceptedCases);

router
.route("/completed-cases")
.all(restricted)
.get(CasesController.getCompletedCases);

/**
 * Routes
 *   POST /cases/:id/addendums
 */

router
  .route("/:id/addendums")
  .all(restricted)
  .get(AddendumsController.index)
  .all(require_body(["description"]))
  .post(AddendumsController.create);

/**
 * Routes
 *   PUT
 */

router
  .route("/:id/case-request-accepted")
  .all(restricted)
  .put(CasesController.acceptCase);

router
  .route("/:id/case-request-declined")
  .all(restricted)
  .put(CasesController.declineCase);

router
  .route("/:id/case-request-completed")
  .all(restricted)
  .put(CasesController.completeCase);

/**
 * Export router
 */

module.exports = router;
