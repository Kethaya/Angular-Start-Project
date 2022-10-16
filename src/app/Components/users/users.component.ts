import { Component, OnInit } from '@angular/core';
import { Users } from './services/users.model';
import { userService } from './services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  userList: Users[] = [];

  constructor(private usersService: userService) { }

  ngOnInit(): void {
    this.userList = this.usersService.getUsers();
  }

}
