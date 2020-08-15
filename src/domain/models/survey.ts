export interface SurveyAnswerModel {
  image?: string
  answer: string
}

export type SurveyModel = {
  id: string
  question: string
  answers: SurveyAnswerModel[]
  date: Date
}
