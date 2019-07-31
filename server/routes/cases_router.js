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

router
  .route("/accepted-cases")
  .all(restricted)
  .get(CasesController.getAcceptedCases);

router
  .route("/declined-cases")
  .all(restricted)
  .get(CasesController.getDeclinedCases);

  
  /**
   * Routes
   *   GET /cases/:id
   */
  
router.route("/:id").get(CasesController.indexById);

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

/**
 * Export router
 */

module.exports = router;
