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
    } catch (err) {
      console.error(err);
      res.status(500).json({message: 'Internal Server Error'});
    }

  }

  static async mediatorUpgrade(req, res) {
      try {
        const { id } = req.params;

        const updateUser = await model.editUser(id, {
          'experience': req.body.experience,
          'specialization': req.body.specialization,
          'language': req.body.language,
          'professional_bio': req.body.professional_bio,
          'name': req.body.name
        });

        updateUser
          ? res.status(200).json({ message: "successfully updated credentials" })
          : res.status(404).json({ message: "missing required fields" });
      } catch (err) {
        res.status(500).json(err.message);
      }
  }

}



/**
 * Export controller
 */

module.exports = RootController
