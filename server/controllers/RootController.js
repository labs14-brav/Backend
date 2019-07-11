'use strict'

const model = require('../models/rootModel');

/**
 * Define controller
 */

class RootController {
  static index(req, res) {
    res.status(200).json('Welcome to Brāv!')
  }

  static findUsers(req, res) {
      model.getUsers()
        .then(users => {
          res.status(200).json(users);
        })
        .catch(error => {
          console.error(error);
          res.status(500).json({message: 'Internal Server Error'});
        })
  }
}

/**
 * Export controller
 */

module.exports = RootController
