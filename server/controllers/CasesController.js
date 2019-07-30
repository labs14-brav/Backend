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
      const cases = await Case.all(req.body.email)

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

      //need to introduce a check for whether or not the body has req.body.court_case : true or false
      const new_case = await Case.create(req.body)

      res.status(201).json(new_case)
    } catch(err) {
      console.error(err)
      res.status(500).json({ error: { message: 'Internal Server Error' } })
    }
  }

  static async show(req, res) {
    try {
      const fetched_case = await Case.find(req.params.id)

      if (fetched_case) {
        res.status(200).json(fetched_case)
      } else {
        res.status(404).json({ errer: { message: 'Not Found' }})
      }
    } catch(err) {
      console.error(err)
      return res.status(500).json({ error: { message: 'Internal Server Error' } })
    }
  }
}

/**
 * Export controller
 */

module.exports = CasesController
