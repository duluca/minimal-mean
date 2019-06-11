import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { environment as env } from '../../environments/environment'

export interface IPaginatedData<T> {
  data: T[]
  total: number
}

export interface IUser {
  firstName: string
  lastName: string
  fullName: string
}

@Injectable()
export class UsersService {
  constructor(private http: HttpClient) {}

  getUsers(): Observable<IPaginatedData<IUser>> {
    return this.http.get<IPaginatedData<IUser>>(`${env.baseUrl}/user`)
  }
}
