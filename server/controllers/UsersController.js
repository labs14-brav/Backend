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
        const approved = await model.approveMediator(id);
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
        const declined = await model.declineMediator(id);
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