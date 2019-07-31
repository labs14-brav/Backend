'use strict'

const model = require('../models/rootModel');
const jwtDecode = require('jwt-decode');
const jwt = require('jsonwebtoken');

/**
 * Define controller
 */

class RootController {
  static index(req, res) {
    res.status(200).json('Welcome to Brāv!')
  }

  static findUsers(req, res) {
      model.getUsers(req.query.offset)
        .then(users => {
          res.status(200).json(users);
        })
        .catch(error => {
          console.error(error);
          res.status(500).json({message: 'Internal Server Error'});
        })
  }

  static async auth(req, res) {
    try {
      const user = {
        email: req.body.email,
        uid:req.body.uid,
      };

      let foundUser = await model.getUserByEmail(user.email);

      if (foundUser) {
        res.status(200).json(foundUser);
      } else {
        // if the user doesn't exist create a user object that reflect the database schema.
        const newUser = {
          uid: user.uid,
          email: user.email,
        };

        const id = await model.addUser(user);

        foundUser = await model.getUserById(id);

        res.status(200).json(foundUser);
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({message: 'Internal Server Error'});
    }
  }
}

/**
 * Export controller
 */

module.exports = RootController
