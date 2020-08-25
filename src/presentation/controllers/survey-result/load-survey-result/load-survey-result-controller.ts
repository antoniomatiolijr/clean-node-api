import { HttpRequest, HttpResponse, Controller } from '@/presentation/protocols'
import { LoadSurveyById } from '@/domain/usecases/survey/load-survey-by-id'

export class LoadSurveyResultController implements Controller {
  constructor (private readonly loadSurveyById: LoadSurveyById) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    const {
      params: { surveyId }
    } = httpRequest

    await this.loadSurveyById.loadById(surveyId)
    return null
  }
}
