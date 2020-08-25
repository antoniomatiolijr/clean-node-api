import { HttpRequest, HttpResponse, Controller } from '@/presentation/protocols'
import { LoadSurveyById } from '@/domain/usecases/survey/load-survey-by-id'
import { forbidden } from '@/presentation/helpers/http/http-helper'
import { InvalidParamError } from '@/presentation/errors'

export class LoadSurveyResultController implements Controller {
  constructor (private readonly loadSurveyById: LoadSurveyById) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    const {
      params: { surveyId }
    } = httpRequest

    const survey = await this.loadSurveyById.loadById(surveyId)

    if (!survey) {
      return forbidden(new InvalidParamError('surveyId'))
    }

    return null
  }
}
