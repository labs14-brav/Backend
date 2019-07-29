'use strict'

/**
 * Dependencies
 */

const request = require('supertest');
const server = require('../../server/app.js');
const db = require('../../data/dbConfig')

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

describe('tests', () => {

    describe('get', () => {
        it('should return status 200 OK', async () => {
            const res = await request(server).get('/')
            expect(res.status).toBe(200);
        });

        it('should return JSON', async () => {
            const res = await request(server).get('/');
            expect(res.type).toBe('application/json')
        })

        it('should return status 200 OK', async () => {
            const res = await request(server).get('/users');
            expect(res).toBeTruthy()
            // console.error(res.body)
            // expect(res.body[0].id).toBe(1);
        });
    });

});
