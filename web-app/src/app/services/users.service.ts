import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

const baseUrl = 'http://localhost:3000'

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
    return this.http.get<IPaginatedData<IUser>>(`${baseUrl}/user`)
  }
}
