/**
 * Dependencies
 */

const firebase = require("../initializers/firebase");

/**
 * Export middleware
 */

module.exports = decodeToken;

/**
 * Define middleware
 */

function decodeToken(req,res,next){
  const token = req.get('Authorization') || req.body.token;

  if (process.env.NODE_ENV === 'test') next()

  if (token) {
      firebase.auth().verifyIdToken(token)
      .then(decodeToken => {
          req.body.email= decodeToken.email;
          req.body.uid= decodeToken.uid;
          next();

      })
      .catch(err=>{
          console.error(err);
          res.status(500).json({message:"internal server error"});
      })
  } else {
      res.status(400).json({message:"not authorized"});
  }
}
