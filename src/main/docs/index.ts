import { loginPath } from './paths/login-path'
import {
  accountSchema,
  loginParamsSchema,
  errorSchema,
  surveysSchema,
  surveyAnswerSchema,
  surveySchema,
  apiKeyAuthSchema
} from './schemas'
import {
  badRequest,
  forbidden,
  notFound,
  serverError,
  unauthorized
} from './components'
import { surveyPath } from './paths'

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
    },
    {
      name: 'Enquete'
    }
  ],
  paths: {
    '/login': loginPath,
    '/surveys': surveyPath
  },
  schemas: {
    account: accountSchema,
    loginParams: loginParamsSchema,
    error: errorSchema,
    surveys: surveysSchema,
    survey: surveySchema,
    surveyAnswer: surveyAnswerSchema
  },
  components: {
    securitySchemes: {
      apiKeyAuth: apiKeyAuthSchema
    },
    badRequest,
    serverError,
    unauthorized,
    notFound,
    forbidden
  }
}
