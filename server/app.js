'use strict'

/**
 * Dependencies
 */

require('dotenv').config()
const express = require('express')
const helmet = require('helmet')
const cors = require('cors')


console.log(process.env.FIREBASE_ENV)
process.exit()
/**
 * Constants
 */

const port = process.env.PORT || 8888



/**
 * Define app
 */



const app = express()

/**
 * Locals
 */

app.locals.firebase= require("./initializers/firebase")


/**
 * Config
 */

app.disable('x-powered-by')

/**
 * Middleware
 */

app.use(helmet())
app.use(cors())
app.use(express.json())

/**
 * Routes
 */

app.use(require('./routes/root_router'))

/**
 * Start server
 */

if (module === require.main) {
  app.listen(port, () => {
    console.log(`Express running on port ${port}`)
  })
}

/**
 * Export app
 */

module.exports = app
