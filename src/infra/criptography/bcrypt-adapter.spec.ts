import bcrypt from 'bcrypt'
import { BcryptAdapter } from './bcrypt-adapter'

jest.mock('bcrypt', () => ({
  async hash (): Promise<string> {
    return await new Promise((resolve) => resolve('hash_value'))
  },
  async compare (): Promise<boolean> {
    return await new Promise((resolve) => resolve(true))
  }
}))

const salt = 12
const makeSut = (): BcryptAdapter => {
  return new BcryptAdapter(salt)
}

describe('Bcrypt Adapter', () => {
  test('Should call hash with correct value', async () => {
    const hashSpy = jest.spyOn(bcrypt, 'hash')
    const sut = makeSut()
    await sut.hash('any_value')
    expect(hashSpy).toHaveBeenCalledWith('any_value', salt)
  })
  test('Should returns a valid hash on hash success', async () => {
    const sut = makeSut()
    const hashValue = await sut.hash('any_value')
    expect(hashValue).toBe('hash_value')
  })

  test('Should throw if hash throws', async () => {
    const sut = makeSut()
    jest
      .spyOn(bcrypt, 'hash')
      .mockReturnValue(new Promise((resolve, reject) => reject(new Error())))

    const promise = sut.hash('any_value')
    await expect(promise).rejects.toThrow()
  })

  test('Should call compare with correct value', async () => {
    const hashSpy = jest.spyOn(bcrypt, 'compare')
    const sut = makeSut()
    await sut.compare('any_value', 'any_hash')
    expect(hashSpy).toHaveBeenCalledWith('any_value', 'any_hash')
  })

  test('Should returns true when compare succeeds', async () => {
    const sut = makeSut()
    const isValid = await sut.compare('any_value', 'any_hash')
    expect(isValid).toBe(true)
  })

  test('Should returns false when compare fails', async () => {
    const sut = makeSut()
    jest
      .spyOn(bcrypt, 'compare')
      .mockReturnValueOnce(new Promise((resolve) => resolve(false)))
    const isValid = await sut.compare('any_value', 'any_hash')
    expect(isValid).toBe(false)
  })

  test('Should throw if compare throws', async () => {
    const sut = makeSut()
    jest
      .spyOn(bcrypt, 'compare')
      .mockReturnValue(new Promise((resolve, reject) => reject(new Error())))

    const promise = sut.compare('any_value', 'any_hash')
    await expect(promise).rejects.toThrow()
  })
})
