/**
 * Dependencies
 */

const Case = require('../../server/models/Case')

/**
 * Assertions
 */

describe('models', () => {
  test('NODE_ENV=test', () => {
    expect(process.env.NODE_ENV).toBe('test')
  })
})
