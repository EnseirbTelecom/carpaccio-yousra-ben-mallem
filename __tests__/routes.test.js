const request = require('supertest')
const app = require('../index')

let testServer
beforeAll(() => {
  testServer = app.listen(3000)
})

afterAll((done) => {
  testServer.close(done)
})

describe('route', function () {
  test('integration test', async (done) => {
    const res = await request(app)
      .post('/bill')
      .send({ quantities: [10, 20], prices: [5, 2], country: 'IT', discount: 'FLAT_DISCOUNT' })
    expect(res.body.total).toBe(78.75)
    expect(res.statusCode).toBe(200)
    done()
  })
})
