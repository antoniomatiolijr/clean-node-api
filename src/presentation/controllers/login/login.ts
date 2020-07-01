import { Controller, HttpRequest, HttpResponse } from '../../protocols'
import { badRequest, serverError } from '../../helpers/http-helper'
import { MissingParamError, InvalidParamError } from '../../errors'
import { EmailValidator } from '../signup/signup-protocols'

export class LoginController implements Controller {
  private readonly emailValidator: EmailValidator

  constructor (emailValidator: EmailValidator) {
    this.emailValidator = emailValidator
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { email, password } = httpRequest.body

      if (!email) {
        return await new Promise((resolve) =>
          resolve(badRequest(new MissingParamError('email')))
        )
      }

      if (!password) {
        return await new Promise((resolve) =>
          resolve(badRequest(new MissingParamError('password')))
        )
      }

      if (!this.emailValidator.isValid(email)) {
        return await new Promise((resolve) =>
          resolve(badRequest(new InvalidParamError('email')))
        )
      }
    } catch (error) {
      return serverError(error)
    }
  }
}
