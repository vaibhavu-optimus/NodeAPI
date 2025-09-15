const request = require('supertest');
const app = require('../app');

describe('Express App', () => {
  it('GET / should return Hello message', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe('Hello from Express!');
  });

  it('POST /api/data should respond with received data', async () => {
    const payload = { name: 'Test' };
    const res = await request(app)
      .post('/api/data')
      .send(payload)
      .set('Accept', 'application/json');

    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe('Data received!');
    expect(res.body.data).toEqual(payload);
  });
});
