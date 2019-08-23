'use strict'

/**
 * Dependencies
 */

const express = require('express')
const CasesController = require('../controllers/CasesController')
const DocumentsController = require('../controllers/DocumentsController')
const AddendumsController = require('../controllers/AddendumsController')
const restricted = require('../middleware/restricted')
const require_body = require('../middleware/require_body')

/**
 * Define router
 */

const router = express.Router()

/**
 * Routes
 *   GET,POST /cases
 */

router.route("/")
  .all(restricted)
  .get(CasesController.index)
  .all(require_body(["dispute_category"]))
  .post(CasesController.create)

/**
 * Routes (temp)
 *   GET /cases/all
 */

router.route("/all")
  .all(restricted)
  .get(CasesController.all)

/**
 * Routes
 *   GET,DELETE /cases/:id
 */

router.route("/:id")
  .all(restricted)
  .get(CasesController.indexById)
  .delete(CasesController.delete)

/**
 * Routes
 *   GET /cases/:id/pending-cases
 */

router.route("/:id/pending-cases")
  .all(restricted)
  .get(CasesController.getPendingCases)

/**
 * Routes
 *   GET /cases/:id/active-cases
 */

router.route("/:id/active-cases")
  .all(restricted)
  .get(CasesController.getActiveCases)

/**
 * Routes
 *   GET /cases/:id/completed-cases
 */

router.route("/:id/completed-cases")
  .all(restricted)
  .get(CasesController.getCompletedCases)

/**
 * Routes
 *   GET,POST /cases/:id/addendums
 */

router.route("/:id/addendums")
  .all(restricted)
  .get(AddendumsController.index)
  .all(require_body(["description"]))
  .post(AddendumsController.create)

/**
 * Routes
 *   PUT /cases/:id/case-request-accepted
 */

router.route("/:id/case-request-accepted")
  .all(restricted)
  .put(CasesController.acceptCase)

/**
 * Routes
 *   PUT /cases/:id/case-request-declined
 */

router.route("/:id/case-request-declined")
  .all(restricted)
  .put(CasesController.declineCase)

/**
 * Routes
 *   PUT /cases/:id/case-request-completed
 */

router.route("/:id/case-request-completed")
  .all(restricted)
  .put(CasesController.completeCase)

  /**
 * Routes
 *   GET  /cases/:id/documents
 *   POST /cases/:id/documents
 */

  router.route("/:id/documents")
  .all(restricted)
  .get(DocumentsController.index)
  .all(require_body(["file_name"]))
  .post(DocumentsController.create)


/**
 * Export router
 */

module.exports = router
