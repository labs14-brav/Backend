'use strict'

/**
 * Define middleware
 */

function not_found_catch(req, res, next) {
  let err = new Error()
  err.status  = 404
  err.message = 'Not found'

  next(err)
}

function server_error_catch(err, req, res, next) {
  err.status = err.status || 500
  err.message = err.message || 'Internal Server Error'

  if (process.env.NODE_ENV !== 'test') {
    console.error(err.message)
  }

  res.status(err.status).json({ error: {
    status: err.status,
    message: err.message
  }})
}

/**
 * Export middleware
 */

module.exports = [not_found_catch, server_error_catch]
