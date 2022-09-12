import { Component, OnInit } from '@angular/core';
import { ActorsService } from 'src/app/shared/services/actors.service';

@Component({
  selector: 'app-actors-list',
  templateUrl: './actors-list.component.html',
  styleUrls: ['./actors-list.component.scss']
})
export class ActorsListComponent implements OnInit {

  actors;
  filteredActor: string = '';
  
  constructor( service: ActorsService ) { 
    this.actors = service.actors;
  }

  ngOnInit(): void {
  }

}
