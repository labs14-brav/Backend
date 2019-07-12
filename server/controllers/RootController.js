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
          res.status(500).json(error);
        })
  }


  static signup(req, res) {
    res.status(200).json('Welcome to singup!')
  }
  static signin(req, res) {
    res.status(200).json('Welcome to signin!')
  }

}



/**
 * Export controller
 */

module.exports = RootController
