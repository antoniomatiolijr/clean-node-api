import { LogMongoRepository } from '../../../infra/db/mongodb/log/log-mongo-repository'
import { Controller } from '../../../presentation/protocols'
import { LogControllerDecorator } from '../../decorators/log-controller-decorator'

export const makeLogControllerDecorator = (
  controler: Controller
): Controller => {
  const logMongoRepository = new LogMongoRepository()
  return new LogControllerDecorator(controler, logMongoRepository)
}
