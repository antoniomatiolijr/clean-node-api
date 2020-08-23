import {
  accountSchema,
  loginParamsSchema,
  signUpParamsSchema,
  errorSchema,
  surveysSchema,
  surveySchema,
  surveyAnswerSchema,
  addSurveyParamsSchema,
  saveSurveyResultParamsSchema,
  surveyResultSchema,
  surveyResultAnswerSchema
} from './schemas/'

export default {
  account: accountSchema,
  loginParams: loginParamsSchema,
  signUpParams: signUpParamsSchema,
  error: errorSchema,
  surveys: surveysSchema,
  survey: surveySchema,
  surveyAnswer: surveyAnswerSchema,
  addSurveyParams: addSurveyParamsSchema,
  saveSurveyParams: saveSurveyResultParamsSchema,
  surveyResult: surveyResultSchema,
  surveyResultAnswer: surveyResultAnswerSchema
}
