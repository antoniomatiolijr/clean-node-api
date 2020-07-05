import { RequiredFieldValidation } from './required-field-validation'
import { MissingParamError } from '../../errors'

describe('Required Field Validation', () => {
  test('Should return a missing param error if validation fails', () => {
    const sut = new RequiredFieldValidation('field')
    const error = sut.validate({ name: 'name' })

    expect(error).toEqual(new MissingParamError('field'))
  })
})
