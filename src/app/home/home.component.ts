import { Component, OnInit, TemplateRef } from '@angular/core';
import { GithubQuerysService } from '../services/github-querys.service';
import { IUserData } from '../core/interfaces/data-user.intefrace';
import { BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  listUsers:IUserData[];
  constructor(
    private gitHubQueryService: GithubQuerysService,
    private bsModalService: BsModalService
    ) {
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


  onHandleOpenModal(url:string, modalTemplate: TemplateRef<any>): void {
    console.log(url);
    this.bsModalService.show(modalTemplate, {
      id: 1, // para poder levantar modal sobre modal se debe ir sumando un nivel.
      backdrop: true,
      class: 'modal-lg',
    })
  }
}
