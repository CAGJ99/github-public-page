import { Component, Input, OnInit } from '@angular/core';
import { IUser } from 'src/app/core/interfaces/user.interface';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  activeLoading: boolean;

  @Input() data!: IUser;
  constructor() {
    this.activeLoading = true;
  }

  ngOnInit(): void {
  }

  onLoadImg(): void {
    this.activeLoading = false;
  }

}