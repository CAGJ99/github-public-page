import { Component, OnInit, TemplateRef } from '@angular/core';
import { GithubQuerysService } from '../services/github-querys.service';
import { IUserData } from '../core/interfaces/data-user.intefrace';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ISubscriptionData } from '../core/interfaces/subscription.interface';
import { ITableConfig } from '../core/interfaces/table.interface';
import { MainFactoryService } from '../core/services/main-factory.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  listUsers: IUserData[];
  subscriptionList:IUserData[];
  userTableConfig:ITableConfig;
  subscritpionTableConfig:ITableConfig;
  constructor(
    private gitHubQueryService: GithubQuerysService,
    private bsModalService: BsModalService,
    private mainFactoryService: MainFactoryService
  ) {
    this.listUsers = [];
    this.subscriptionList =[];
    this.userTableConfig = mainFactoryService.tableConfig.userTable;
    this.subscritpionTableConfig = mainFactoryService.tableConfig.subscriptionTable;
  }

  ngOnInit(): void {
    this.getUsers();
  }

  private getUsers() {
    this.gitHubQueryService.getUsers().subscribe((response: any) => {
      this.listUsers = response;
    });
  }


  public onHandleGetSubscription(url: string, modalTemplate: TemplateRef<any>): void {
    this.gitHubQueryService.getSubscription(url).subscribe((response:any) => {
      this.subscriptionList = response.map((data:ISubscriptionData) => data.owner);
       this.showModal(modalTemplate);
    });
  }

  public showModal(template:TemplateRef<any>){
    this.bsModalService.show(template, {
          id: 1, // para poder levantar modal sobre modal se debe ir sumando un nivel.
          backdrop: true,
          class: 'modal-lg',
        })
  }
}

