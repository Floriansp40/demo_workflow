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
    })
})