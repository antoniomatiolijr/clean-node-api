import request from 'supertest'
import app from '../config/app'
import { MongoHelper } from '../../infra/db/mongodb/helpers/mongo-helper'

describe('SignUp Routes', () => {
  beforeAll(async () => {
    await MongoHelper.connect(process.env.MONGO_URL)
  })

  afterAll(async () => {
    await MongoHelper.disconnect()
  })

  beforeEach(async () => {
    const accoutCollection = MongoHelper.getCollection('accounts')
    await accoutCollection.deleteMany({})
  })

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
