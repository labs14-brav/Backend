'use strict'

const model = require('../models/rootModel');
const jwtDecode = require('jwt-decode');
// const secrets = require('../config/secret.js');
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
    //  console.log(req.body);
    try {

      if (req.body.user) {

        const user = {
          email: req.body.email, 
          uid:req.body.uid,
        };

        let foundUser = await model.getUserByEmail(user.email);

        // console.log("founduser",foundUser)

        if (foundUser) {
          res.status(200).json(foundUser);
        } else {
          // if the user doesn't exist create a user object that reflect the database schema.
          const newUser = {
            uid: user.uid,
            email: user.email,
          };

          const id = await model.addUser(user);
          // console.log("id",id)

          foundUser = await model.getUserById(id);
          // console.log("founduser",foundUser)

          res.status(200).json(foundUser);
        }

  

      } else {
        res.status(400).json({errorMessage: 'Invalid Credentials!'});
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({message: 'Internal Server Error'});
    }

  }

  //Used to test restricted middleware by passing a token on headers.
  // static test(req, res) {
  //   console.log('Test route.');
  //   res.status(200).json({message: 'test route'})
  // }

}



/**
 * Export controller
 */

module.exports = RootController
