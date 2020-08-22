import { loginPath } from './paths/login-path'
import { accountSchema, loginParamsSchema, errorSchema } from './schemas'
import { badRequest, notFound, serverError, unauthorized } from './components'

export default {
  openapi: '3.0.0',
  info: {
    title: 'Clean Node APi',
    description: 'API para realizar enquetes',
    version: '1.0.0'
  },
  license: {
    name: 'GPL-3.0-or-later',
    url: 'https://opensource.org/licenses/gpl-3.0.html'
  },
  servers: [
    {
      url: '/api'
    }
  ],
  tags: [
    {
      name: 'Login'
    }
  ],
  paths: {
    '/login': loginPath
  },
  schemas: {
    account: accountSchema,
    loginParams: loginParamsSchema,
    error: errorSchema
  },
  components: {
    badRequest,
    serverError,
    unauthorized,
    notFound
  }
}
