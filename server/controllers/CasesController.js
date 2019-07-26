'use strict'

/**
 * Dependencies
 */

const Case = require('../models/Case')

/**
 * Define controller
 */

class CasesController {
  static async index(req, res) {
    try {
      const cases = await Case.all()

      return res.status(200).json(cases)
    } catch(err) {
      console.error(err)
      return res.status(500).json({ error: { message: 'Internal Server Error' } })
    }
  }

  static async indexById(req, res) {

    const id = req.params.id;

    try {
      const caseById = await Case.findById(id);
      console.log(caseById,"this is the id")
      return res.status(200).json(caseById);

    } catch (error) {
      console.error(err)
      return res.status(500).json({ error: { message: 'Internal Server Error' } })
    }
  };

  static async create(req, res) {
    try {
      const new_case = await Case.create(req.body)

      res.status(201).json(new_case)
    } catch(err) {
      console.error(err)
      res.status(500).json({ error: { message: 'Internal Server Error' } })
    }
  }
}

/**
 * Export controller
 */

module.exports = CasesController
