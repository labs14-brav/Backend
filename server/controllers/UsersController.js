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
}


module.exports = UsersController;