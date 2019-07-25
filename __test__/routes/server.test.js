const request = require('supertest');

const server = require('../server/app.js');

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
    });

});