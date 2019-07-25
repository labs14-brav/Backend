'use strict'

/**
 * Dependencies
 */

const supertest = require('supertest')
const app = require('../../server/app')
const db = require('../../data/dbConfig')
const signin = require('../helpers/signin')

/**
 * Hooks
 */

beforeAll(async () => {
  await db.migrate.latest()
})

beforeEach(async () => {
  // await db.seed.run()
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

  // describe('article_tags_router.js', () => {
  //   test('GET /articles/:article_id/tags - success', async () => {
  //     const res = await supertest(app).get('/articles/1/tags')
  //     expect(res.status).toBe(200)
  //     expect(res.type).toBe('application/json')
  //     expect(res.body).toBeTruthy()
  //     expect(res.body.constructor).toBe(Array)
  //     expect(res.body.length).toBe(2)
  //   })
  //
  //   test('GET /articles/:article_id/tags - return empty array if no tags', async () => {
  //     await db('article_tags').del()
  //
  //     const res = await supertest(app).get('/articles/1/tags')
  //     expect(res.status).toBe(200)
  //     expect(res.type).toBe('application/json')
  //     expect(res.body).toBeTruthy()
  //     expect(res.body.constructor).toBe(Array)
  //     expect(res.body.length).toBe(0)
  //   })
  // })
})
