import { Component, Input, OnInit } from '@angular/core';
import { ISubscriptionData } from '../../../core/interfaces/subscription.interface';

@Component({
  selector: 'app-subscription-table',
  templateUrl: './subscription-table.component.html',
  styleUrls: ['./subscription-table.component.scss']
})
export class SubscriptionTableComponent implements OnInit {
@Input() subscriptions!: ISubscriptionData[];
  constructor() { }

  ngOnInit(): void {
    console.log(this.subscriptions);
  }

}
