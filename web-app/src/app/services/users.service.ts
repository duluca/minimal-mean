import { Injectable } from '@angular/core';

const baseUrl = 'http://localhost:3000'

const users: IUser[] = [
  {
    firstName: 'John',
    lastName: 'Doe'
  },
  {
    firstName: 'Doguhan',
    lastName: 'Uluca'
  },
]

export interface IUser {
  firstName: string,
  lastName: string
}

@Injectable()
export class UsersService {

  constructor() { }

  getUsers(): IUser[] {
    return users
  }

}
