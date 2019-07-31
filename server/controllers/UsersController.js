'use strict'

/**
 * Dependencies
 */

const moment = require('moment')
const User = require('../models/User')
const model = require('../models/userModel')

/**
 * Define controller
 */

class UsersController {
  static async index(req, res) {
    try {
      const users = await User.all(req.query.offset)
      res.status(200).json(users)
    } catch(err) {
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
      let pending = await model.mediatorRequests()
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
      const approved = await model.approveMediator(id, toUpdate);
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
      const declined = await model.declineMediator(id, toUpdate);
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

      const updateUser = await model.editUser(id, {
        'experience': req.body.experience,
        'specialization': req.body.specialization,
        'language': req.body.language,
        'professional_bio': req.body.professional_bio,
        'name': req.body.name,
        'type' : 'pending_mediator'
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

module.exports = UsersController
