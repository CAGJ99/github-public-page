import { Component, Input, OnInit, Output, TemplateRef, EventEmitter } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { IUserData } from '../../../core/interfaces/data-user.intefrace';
import { IUser } from '../../../core/interfaces/user.interface';
import { ITableConfig } from '../../../core/interfaces/table.interface';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent implements OnInit {
   user!:IUser


  @Input() config!:ITableConfig;
  @Input() listUsers!:IUserData[];
  constructor() {}

  @Output() onOpenModal: EventEmitter<any> = new EventEmitter();
  ngOnInit(): void {
    console.log(this.listUsers);
 
  }

  onShowModal(url:string): void{
    this.onOpenModal.emit(url);
  }

}
