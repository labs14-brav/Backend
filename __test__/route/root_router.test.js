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

  describe('root_router.js', () => {
    test('GET / - success', async () => {
      const res = await supertest(app).get('/')
      expect(res.status).toBe(200)
      expect(res.type).toBe('application/json')
    })

    test('GET /users - success', async () => {
      const res = await supertest(app).get('/users')
      expect(res).toBeTruthy()
      expect(res.body.length).toBe(3)
      expect(res.body[0].id).toBe(1)
    })
  })
})
