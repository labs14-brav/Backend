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

  describe('cases_router.js', () => {
    test('GET /cases - success', async () => {
      const res = await supertest(app).get('/cases')
      expect(res.status).toBe(200)
      expect(res.type).toBe('application/json')
      expect(res.body).toBeTruthy()
      expect(res.body.constructor).toBe(Array)
      expect(res.body.length).toBe(2)
    })

    test('POST /cases - success', async () => {
      const res = await supertest(app).post('/cases')
        .send({
          description: 'Case description',
          dispute_category: 'Commercial disputes'
        })
      expect(res.status).toBe(201)
      expect(res.type).toBe('application/json')
      expect(res.body).toBeTruthy()
    })

    test('POST /cases - missing field: description and dispute_category', async () => {
      const res = await supertest(app).post('/cases')
        .send({ title: 'Test Case' })
      expect(res.status).toBe(422)
      expect(res.type).toBe('application/json')
      expect(res.body).toBeTruthy()
      expect(res.body).toMatchObject({ error: { message: 'Missing fields: dispute_category' } })
    })

    test('GET /cases/:id/addendums - success', async () => {
      const res = await supertest(app).get('/cases/1/addendums')
      expect(res.status).toBe(200)
      expect(res.type).toBe('application/json')
      expect(res.body).toBeTruthy()
      expect(res.body.constructor).toBe(Array)
      expect(res.body.length).toBe(0)
    })

    test('POST /cases/:id/addendums - missing request body', async () => {
      const res = await supertest(app).post('/cases/1/addendums')
      expect(res.status).toBe(422)
      expect(res.type).toBe('application/json')
      expect(res.body).toBeTruthy()
      expect(res.body).toMatchObject({ error: { message: 'Missing request body' } })
    })

    test('POST /cases/:id/addendums - missing request body fields', async () => {
      const res = await supertest(app).post('/cases/1/addendums')
        .send({ title: 'Title is not used for addendums' })
      expect(res.status).toBe(422)
      expect(res.type).toBe('application/json')
      expect(res.body).toBeTruthy()
      expect(res.body).toMatchObject({ error: { message: 'Missing fields: description' } })
    })

    test('POST /cases/:id/addendums - success', async () => {
      const res = await supertest(app).post('/cases/1/addendums')
        .send({
          description: 'This case has not yet gone to the courts. Both parties are seeking pre-trial arbitration.',
        })
      expect(res.status).toBe(201)
      expect(res.type).toBe('application/json')
      expect(res.body).toBeTruthy()
    })
  })
})
