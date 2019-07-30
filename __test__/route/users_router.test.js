'use strict'

/**
 * Dependencies
 */

const supertest = require('supertest')
const app = require('../../server/app')
const db = require('../../data/dbConfig')

/**
 * Hooks
 */

beforeAll(async () => {
  await db.migrate.latest()
})

beforeEach(async () => {
  await db.seed.run()
})

afterAll(async () => {
  await db.migrate.rollback(null, true)
})

/**
 * Assertions
 */

describe('routes', () => {
  test('NODE_ENV=test', () => {
    expect(process.env.NODE_ENV).toBe('test')
  })

  describe('users_router.js', () => {
    test('PUT /users/deactivate - success', async () => {
      const res = await supertest(app).put('/users/deactivate')
      expect(res.status).toBe(200)
      expect(res.type).toBe('application/json')
      expect(res.body).toBeTruthy()
      expect(res.body).toMatchObject({ message: 'Successfully deactivated your account.' })
    })
  })
})
