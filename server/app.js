'use strict'

/**
 * Import environment
 */

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

/**
 * Dependencies
 */

const express = require('express')
const helmet = require('helmet')
const cors = require('cors')

/**
 * Constants
 */

const port = process.env.PORT || 8888

/**
 * Define app
 */

const app = express()

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

app.use('/', require('./routes/root_router'))
app.use('/cases', require('./routes/cases_router'))
app.use('/users', require('./routes/users_router'))
app.use('/mediators', require('./routes/mediators_router.js'))

/**
 * Error Handlers
 */

app.use(require('./middleware/error_handlers'))

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
