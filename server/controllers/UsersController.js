const model = require('../models/userModel');
const moment = require('moment');


class UsersController {
  static async fetchMediators(req, res) {
    try {
        let mediators = await model.fetchMediators()
        if (mediators) {
          //console.log('Inside fetchMediators');
          res.status(200).json(mediators);
        } else {
          res.status(500).json({message: 'Internal Server Error'})
        }
    } catch(err) {
        console.error(err);
        res.status(500).json({message: 'Internal Server Error'});
    }

  }

  static async mediatorRequests(req, res) {
    try {
      let pending = await model.mediatorRequests()
      if (pending) {
        res.status(200).json(pending);
      } else {
        res.status(500).json({message: 'Internal Server Error'})
      }
    } catch(err) {
      console.error(err);
      res.status(500).json({message: 'Internal Server Error'});
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
          res.status(500).json({message: 'Internal Server Error'})
        }
      } catch(err) {
          console.error(err);
          res.status(500).json({message: 'Internal Server Error'})
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
        //console.log('toUpdate', toUpdate)
        const declined = await model.declineMediator(id, toUpdate);
        if (declined) {
          res.status(200).json(declined);
        } else {
          res.status(500).json({message: 'Internal Server Error'})
        }
      } catch(err) {
          console.error(err);
          res.status(500).json({message: 'Internal Server Error'})
      }
    }
  }


module.exports = UsersController;