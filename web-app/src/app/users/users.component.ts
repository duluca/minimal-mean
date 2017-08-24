import { IUser, UsersService } from '../services/users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private usersService: UsersService) { }

  users: IUser[]

  ngOnInit() {
    this.users = this.usersService.getUsers()
  }

}
