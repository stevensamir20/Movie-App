import { Component, OnInit } from '@angular/core';
import { ActorsService } from 'src/app/shared/services/actors.service';
import { ActorsPayload } from 'src/app/shared/interfaces/actors-payload';
import { Subscription } from 'rxjs';
import { LoginService } from 'src/app/shared/services/login.service';
import { faEye, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-actors-list',
  templateUrl: './actors-list.component.html',
  styleUrls: ['./actors-list.component.scss']
})
export class ActorsListComponent implements OnInit {

  actors?: ActorsPayload[];
  filteredActor: string = '';
  sub?: Subscription;
  userName: any;
 

  constructor(private actorsService: ActorsService, private loginService: LoginService) {
    this.userName = this.loginService.getToken();
  }

  ngOnInit(): void {
    this.sub = this.actorsService.getActors().subscribe((data) => {
    this.actors = data;
    });
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  faEye = faEye;
  faSearch = faMagnifyingGlass;
}
