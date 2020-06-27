import request from 'supertest'
import app from '../config/app'

describe('SignUp Routes', () => {
  test('Should enable return an account on success', async () => {
    await request(app)
      .post('/api/signup')
      .send({
        name: 'Matioli',
        email: 'matioli@gmail.com',
        password: 'matioli',
        passwordConfirmation: 'matioli'
      })
      .expect(200)
  })
})
