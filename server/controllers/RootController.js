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


   static async signup(req, res) {
    try {
      const token = req.headers.authorization;
  
      if (req.headers && req.headers.authorization && token) {
       
        const userToken = token.replace(/Bearer /g, '');
        console.log("token",userToken)
  
        // const decode = jwtDecode(userToken);
  

        const user = {
          email: 'joesmith@email',//decode.name,
          nickname:'joe smith' //decode.nickname
        };
  
        const foundUser = await model.getUserByName(user.nickname);

        console.log("founduser",foundUser)
  
        if (foundUser) {
          res.status(200).json(foundUser);
        } else {
          // if the user doesn't exist create a user object that reflect the database schema.
          // const newUser = {
          //   nickname: user.nickname,
          //   email: user.email
          // };
  
          const id = await model.addUser(user);
          console.log("id",id)

          // res.status(201).json(user);
          const foundUser = await model.getUserById(id);
          console.log("founduser",foundUser)
      
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
  static signin(req, res) {
    res.status(200).json('Welcome to signin!')
  }

}



/**
 * Export controller
 */

module.exports = RootController

