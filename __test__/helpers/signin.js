/**
 * Dependencies
 */

const firebase = require('../../server/initializers/firebase')

/**
 * Define helper
 */

async function signin() {
  try {
    const token = await firebase.auth().createCustomToken('PHl15FQAA7T0PrB3YT3lTWFZ5Vx2')

    return token
  } catch(err) {
    console.error(err)
  }
}

/**
 * Export helper
 */

module.exports = signin
