import { Component, OnInit } from '@angular/core';
import { LawLobbyService } from '../services/law-lobby.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private lawLobbyService: LawLobbyService) { }

  ngOnInit(): void {
    this.getAll();
  }

  private getAll(){
    this.lawLobbyService.getAll().subscribe(response=>{
      console.log(response);
    })
  }
}
