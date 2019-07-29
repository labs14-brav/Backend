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

    describe('get', () => {
        it('should return status 200 OK', async () => {
            const res = await supertest(app).get('/')
            expect(res.status).toBe(200);
        });

        it('should return JSON', async () => {
            const res = await supertest(app).get('/');
            expect(res.type).toBe('application/json')
        })

        it('should return status 200 OK', async () => {
            const res = await supertest(app).get('/users');
            expect(res).toBeTruthy()
            expect(res.body.length).toBe(3);
            expect(res.body[0].id).toBe(1);
        });
    });

});
