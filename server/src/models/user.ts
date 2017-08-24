import { IDocument, Document, CollectionFactory } from 'document-ts'
import { ObjectID } from 'mongodb'
import { v4 as uuid } from 'uuid'

var bcrypt = require('bcryptjs')

export interface IUser extends IDocument {
  email: string,
  firstName: string,
  lastName: string,
  role: string
}

export class User extends Document<IUser> implements IUser {
  static collectionName = 'users'

  private password: string

  public email: string
  public firstName: string
  public lastName: string
  public role: string

  constructor(user?: IUser) {
    super(User.collectionName, user)
  }

  getCalculatedPropertiesToInclude(): string[]{
      return ['fullName']
  }

  getPropertiesToExclude(): string[]{
      return ['password']
  }

  public get fullName(): string {
    return `${this.firstName} ${this.lastName}`
  }

  async create(firstName: string, lastName: string, email: string, role: string, password?: string) {
      this.firstName = firstName
      this.lastName = lastName
      this.email = email
      this.role = role

      if(!password) {
          password = uuid()
      }

      this.password = await this.setPassword(password)
      await this.save()
  }

  async resetPassword(newPassword: string) {
    this.password = await this.setPassword(newPassword)
    await this.save()
  }

  private setPassword(newPassword: string): Promise<string> {
    return new Promise<string>(function(resolve, reject){
        bcrypt.genSalt(10, function(err: Error, salt: string) {
          if(err) {
            return reject(err)
          }
          bcrypt.hash(newPassword, salt, function(err: Error, hash: string) {
            if(err) { return reject(err) }
            resolve(hash)
          })
        })
    })
  }

  comparePassword(password: string): Promise<boolean>{
    let user = this
    return new Promise(function(resolve, reject){
      bcrypt.compare(password, user.password, function(err: Error, isMatch: boolean) {
        if(err) {
          return reject(err)
        }
        resolve(isMatch)
      })
    })
  }

  hasSameId(id: ObjectID): boolean {
    return this._id.toHexString() === id.toHexString()
  }
}

class UserCollectionFactory extends CollectionFactory<User> {
    constructor(docType: typeof User) {
        super(User.collectionName, docType, [ 'firstName', 'lastName', 'email' ])
    }
}

export let UserCollection = new UserCollectionFactory(User)