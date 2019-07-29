const model = require('../models/userModel');


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

  static async mediator_requests(req, res) {
    try {
      let pending = await model.mediator_requests()
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

    static async approve_mediator(req, res) {
      try {

      } catch(err) {

      }
    }

    static async decline_mediator(req, res) {
      try {

      } catch(err) {
        
      }
    }
  }


module.exports = UsersController;