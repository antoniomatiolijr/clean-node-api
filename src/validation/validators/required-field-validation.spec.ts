import { RequiredFieldValidation } from './required-field-validation'
import { MissingParamError } from '../../presentation/errors'

describe('Required Field Validation', () => {
  const makeSut = (): RequiredFieldValidation =>
    new RequiredFieldValidation('field')

  test('Should return a missing param error if validation fails', () => {
    const sut = makeSut()
    const error = sut.validate({ name: 'name' })

    expect(error).toEqual(new MissingParamError('field'))
  })

  test('Should not return  if validation succeeds', () => {
    const sut = makeSut()
    const error = sut.validate({ field: 'field' })
    expect(error).toBeFalsy()
  })
})
