import { Component, Input, OnInit } from '@angular/core';
import { IUserData } from '../../../core/interfaces/data-user.intefrace';
import { IUser } from '../../../core/interfaces/user.interface';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent implements OnInit {
   user!:IUser
  @Input() listUsers!:IUserData[];
  constructor() {}

  ngOnInit(): void {
 
  }
}
