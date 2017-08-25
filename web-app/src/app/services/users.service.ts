import { Injectable } from '@angular/core'
import {HttpClient} from "@angular/common/http"
import { environment as env } from '../../environments/environment'

export interface IPaginatedData<T> {
  data: T[],
  total: number
}

export interface IUser {
  firstName: string,
  lastName: string,
  fullName: string
}

@Injectable()
export class UsersService {
  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get<IPaginatedData<IUser>>(`${env.baseUrl}/user`)
  }
}
