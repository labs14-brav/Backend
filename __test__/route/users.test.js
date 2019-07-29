const request = require('supertest');

const server = require('../../server/app.js');

describe('Users Route', () => {

    describe('GET', () => {
        it('should return JSON', async () => {
            const res = await request(server).get('/');
            expect(res.type).toBe('application/json')
        })
    });

});
