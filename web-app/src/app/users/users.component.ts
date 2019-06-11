import { Component, OnInit } from '@angular/core'
import { IPaginatedData, IUser, UsersService } from '../services/users.service'

import { Observable } from 'rxjs'

@Component({
  selector: 'app-users',
  template: `
    <h2>All Users</h2>
    <mat-list>
      <mat-list-item *ngFor="let user of users$ | async">
        <span>{{user.fullName}}</span>
      </mat-list-item>
    </mat-list>
  `,
})
export class UsersComponent {
  users$: Observable<IPaginatedData<IUser>>

  constructor(private usersService: UsersService) {
    this.users$ = this.usersService.getUsers()
  }
}
