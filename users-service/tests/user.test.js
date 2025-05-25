const request = require('supertest');
const app = require('../app');

describe('User API', () => {
    it('should list all users', async () => {
      const res = await request(app).get('/api/users');

      expect(res.statusCode).toEqual(200);
      expect(Array.isArray(res.body)).toBeTruthy();
    });

    it('should create a user', async () => {
      const res = await request(app).post('/api/users').send({
        name: 'Maria',
        email: `maria@test.com`
      });

      expect(res.statusCode).toEqual(201);
      expect(res.body).toHaveProperty('id');
      expect(res.body).toHaveProperty('name', 'Maria');
    });
  });