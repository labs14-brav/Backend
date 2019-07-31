/**
 * Dependencies
 */

const User = require('../models/User')

/**
 * Define middleware
 */

async function adminAuth(req, res, next) {
  try {
    const user = await User.getUserByEmail(req.body.email)

    if (user.type == 'admin') {
      next()
    } else {
      res.status(401).json({ error: { message: "Unauthorized to access" }})
    }
  } catch(error) {
    res.status(500).json({ error: { message: 'Internal Server Error' }})
  }
}

/**
 * Export middleware
 */

module.exports = adminAuth
