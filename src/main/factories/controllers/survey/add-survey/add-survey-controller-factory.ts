import { makeAddSurveyValidation } from './add-survey-validation-factory'
import { Controller } from '@/presentation/protocols'
import { AddSurveyController } from '@/presentation/controllers/survey/add-survey/add-survey-controller'
import { makeLogControllerDecorator } from '@/main/factories/decorators/log-controller-decorator-factory'
import { makeDbAddSurvey } from '@/main/factories/usecases/survey/add-survey/db-add-survey-factory'

export const makeAddSurveyController = (): Controller => {
  return makeLogControllerDecorator(
    new AddSurveyController(makeAddSurveyValidation(), makeDbAddSurvey())
  )
}
