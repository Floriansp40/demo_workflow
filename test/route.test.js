const request = require('supertest')
let server

describe('Route', () => {
    beforeEach(() => {
        server = require('../server')
    })
    afterEach(() => {
        server.close()
    })

    describe('GET ON /', () => {
        it('Should return 200 status', async () => {
            const response = await request(server).get('/')
            expect(response.status).toBe(200)
        })
        it('Should return 200 status', async () => {
            const response = await request(server).get('/second')
            expect(response.status).toBe(200)
        })
        it('Should return 501 status', async () => {
            const response = await request(server).get('/marcel')
            expect(response.status).toBe(501)
        })
    })
})