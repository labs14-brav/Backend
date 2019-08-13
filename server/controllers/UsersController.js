'use strict'

/**
 * Dependencies
 */

const moment = require('moment')
const User = require('../models/User')

/**
 * Define controller
 */

class UsersController {
  static async index(req, res) {
    try {
      const users = await User.all()
      res.status(200).json(users)
    } catch(err) {
      console.error(err)
      res.status(500).json({ error: { message: 'Internal Server Error' }})
    }
  }

  static async auth(req, res) {
    try {
      const user = {
        email: req.body.email,
        uid:req.body.uid,
      }
      let foundUser = await User.getUserByEmail(user.email)

      if (foundUser) {
        res.status(200).json(foundUser)
      } else {
        // if the user doesn't exist create a user object that reflect the database schema.
        const id = await User.create(user)

        foundUser = await User.getUserById(id)

        res.status(200).json(foundUser)
      }
    } catch (err) {
      console.error(err)
      res.status(500).json({ error: { message: 'Internal Server Error' }})
    }
  }

  static async deactivate(req, res) {
    try {
      await User.deactivate(req.body.email)
      res.status(200).json({ message: 'Successfully deactivated your account.' })
    } catch(err) {
      console.error(err)
      res.status(500).json({ error: { message: 'Internal Server Error' }})
    }
  }

  static async mediatorRequests(req, res) {
    try {
      let pending = await User.mediatorRequests()

      if (pending) {
        res.status(200).json(pending);
      } else {
        res.status(500).json({ error: { message: 'Internal Server Error' }})
      }
    } catch(err) {
      console.error(err);
      res.status(500).json({ error: { message: 'Internal Server Error' }});
    }
  }

  static async approveMediator(req, res) {
    try {
      const id = req.params.id;
      //set object for update. Accepted -> type = mediator, and timestamp
      let toUpdate = {
        type: 'mediator',
        mediator_accepted_at: moment().format('MMMM Do, h:mm a'),
        mediator_declined_at: null
      }
      const approved = await User.approveMediator(id, toUpdate);
      if (approved) {
        res.status(200).json(approved);
      } else {
        res.status(500).json({ error: { message: 'Internal Server Error' }})
      }
    } catch(err) {
      console.error(err);
      res.status(500).json({ error: { message: 'Internal Server Error' }})
    }
  }

  static async declineMediator(req, res) {
    try {
      const id = req.params.id;
      //set object for update. Decline, so type is reverted back to user, and timestamped.
      let toUpdate = {
        type: 'user',
        mediator_declined_at: moment().format('MMMM Do, h:mm a'),
        mediator_accepted_at: null
      }
      const declined = await User.declineMediator(id, toUpdate);
      if (declined) {
        res.status(200).json(declined);
      } else {
        res.status(500).json({ error: { message: 'Internal Server Error' }})
      }
    } catch(err) {
      console.error(err);
      res.status(500).json({ error: { message: 'Internal Server Error' }})
    }
  }

  static async mediatorUpgrade(req, res) {
    try {
      const { id } = req.params;
      console.log("Inside Mediator Upgrade");
      console.log(req.body);
      const updateUser = await User.editUser(id, {
        'experience': req.body.experience,
        'license': req.body.license,
        'specialization': req.body.specialization,
        'language': req.body.language,
        'professional_bio': req.body.professional_bio,
        'name': req.body.name,
        'price': req.body.price,
        'type' : 'pending_mediator'
      });

      updateUser
        ? res.status(200).json({ message: "successfully updated credentials" })
        : res.status(404).json({ message: "missing required fields" });
    } catch (err) {
      console.error(err)
      res.status(500).json({ error: { message: 'Internal Server Error' }})
    }
  }
}

/**
 * Export controller
 */

module.exports = UsersController
