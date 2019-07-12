const request = require('supertest');

const server = require('../server/app.js');

describe('Users Route', () => {

    describe('GET', () => {
        it('should return status 200 OK', async () => {
            const res = await request(server).get('/users');
            expect(res.body[0].id).toBe(1);
        });

        it('should return JSON', async () => {
            const res = await request(server).get('/');
            expect(res.type).toBe('application/json')
        })
    });

});