import * as bcrypt from 'bcryptjs'

import { AggregationCursor, ObjectID } from 'mongodb'
import { CollectionFactory, Document, IDocument } from 'document-ts'

import { v4 as uuid } from 'uuid'

export interface IUser extends IDocument {
  email?: string
  firstName?: string
  lastName?: string
  role?: string
}

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - email
 *         - firstName
 *         - lastName
 *         - role
 *       properties:
 *         email:
 *           type: string
 *           format: email
 *         firstName:
 *           type: string
 *         lastName:
 *           type: string
 *         role:
 *           type: string
 *         password:
 *           type: string
 *           format: password
 *     Users:
 *       type: object
 *       properties:
 *         total:
 *           type: number
 *           format: int32
 *       items:
 *         $ref: "#/components/schemas/ArrayOfUser"
 *     ArrayOfUser:
 *       type: array
 *       items:
 *         $ref: "#/components/schemas/User"
 */
export class User extends Document<IUser> implements IUser {
  static collectionName = 'users'
  private password = ''

  constructor(
    public email = '',
    public firstName = '',
    public lastName = '',
    public role = ''
  ) {
    super(User.collectionName, {
      email,
      firstName,
      lastName,
      role,
    } as IUser)
  }

  public static Builder(user: IUser) {
    if (!user) {
      return new User()
    }

    return new User(user.email, user.firstName, user.lastName, user.role)
  }

  getCalculatedPropertiesToInclude(): string[] {
    return ['fullName']
  }

  getPropertiesToExclude(): string[] {
    return ['password']
  }

  public get fullName(): string {
    return `${this.firstName} ${this.lastName}`
  }

  async create(
    firstName: string,
    lastName: string,
    email: string,
    role: string,
    password?: string
  ) {
    this.firstName = firstName
    this.lastName = lastName
    this.email = email
    this.role = role

    if (!password) {
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
    return new Promise<string>(function(resolve, reject) {
      bcrypt.genSalt(10, function(err, salt) {
        if (err) {
          return reject(err)
        }
        bcrypt.hash(newPassword, salt, function(err, hash) {
          if (err) {
            return reject(err)
          }
          resolve(hash)
        })
      })
    })
  }

  comparePassword(password: string): Promise<boolean> {
    let user = this
    return new Promise(function(resolve, reject) {
      bcrypt.compare(password, user.password, function(err, isMatch) {
        if (err) {
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
    super(User.collectionName, docType, ['firstName', 'lastName', 'email'])
  }

  async createIndexes() {
    await this.collection().createIndexes([
      {
        key: {
          email: 1,
        },
        unique: true,
      },
      {
        key: {
          firstName: 'text',
          lastName: 'text',
          email: 'text',
        },
        weights: {
          lastName: 4,
          firstName: 2,
          email: 1,
        },
        name: 'TextIndex',
      },
    ])
  }

  // This is a contrived example for demonstration purposes
  // It is possible to execute far more sophisticated and high performance queries using Aggregation in MongoDB
  // Documentation: https://docs.mongodb.com/manual/aggregation/
  userSearchQuery(
    searchText: string
  ): AggregationCursor<{ _id: ObjectID; email: string }> {
    let aggregateQuery = [
      {
        $match: {
          $text: { $search: searchText },
        },
      },
      {
        $project: {
          email: 1,
        },
      },
    ]

    if (searchText === undefined || searchText === '') {
      delete (aggregateQuery[0] as any).$match.$text
    }

    return this.collection().aggregate(aggregateQuery)
  }
}

export let UserCollection = new UserCollectionFactory(User)
