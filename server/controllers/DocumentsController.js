("use strict");

/**
 * Dependencies
 */

const Document = require("../models/Documents");

/**
 * Define controller
 */

class DocumentsController {

  static async index(req, res) {
    try {
      const documents = await Document.findByCaseId(req.params.id);

      return res.status(200).json(documents);
    } catch (err) {
      console.error(err);
      return res
        .status(500)
        .json({ error: { message: "Internal Server Error" } });
    }
  }


  static async create(req, res) {
    try {
      const documents = await Document.create({
          case_id:req.params.id,
          file_name:req.body.file_name         
    });
      res.status(201).json(documents);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: { message: "Internal Server Error" } });
    }
  }

  }



/**
 * Export controller
 */

module.exports = DocumentsController;
