import { Component, OnInit } from '@angular/core';
import { GithubQuerysService } from '../services/github-querys.service';
import { IUserData } from '../core/interfaces/data-user.intefrace';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  listUsers:IUserData[];
  constructor(private gitHubQueryService: GithubQuerysService) {
    this.listUsers =[]
   }

  ngOnInit(): void {
    this.getUsers();
  }

  private getUsers() {
    this.gitHubQueryService.getUsers().subscribe((response:any) => {
     this.listUsers = response;
    });
  }
}
