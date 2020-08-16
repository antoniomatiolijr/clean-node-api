import { Controller, HttpResponse, HttpRequest } from '@/presentation/protocols'
import { LoadSurveyByIdRepository } from '@/data/protocols/db/survey/load-survey-by-id-repository'

export class SaveSurveyResultController implements Controller {
  constructor (
    private readonly loadSurveyByIdRepository: LoadSurveyByIdRepository
  ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    await this.loadSurveyByIdRepository.loadById(httpRequest.params.surveyId)
    return null
  }
}
