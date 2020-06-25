import {
  AddAccount,
  Encrypter,
  AddAccountModel,
  AccountModel
} from './db-add-account-protocols'
import { AddAccountRepository } from '../../protocols/add-account-repository'

export class DbAddAccount implements AddAccount {
  private readonly encrypter: Encrypter
  private readonly addAccountRepository: AddAccountRepository
  constructor (
    encrypter: Encrypter,
    addAccountRepository: AddAccountRepository
  ) {
    this.encrypter = encrypter
    this.addAccountRepository = addAccountRepository
  }

  async add (accountData: AddAccountModel): Promise<AccountModel> {
    const hashedPassword = await this.encrypter.encrypt(accountData.password)
    await this.addAccountRepository.add({
      ...accountData,
      password: hashedPassword
    })
    return await new Promise((resolve, reject) => resolve(null))
  }
}