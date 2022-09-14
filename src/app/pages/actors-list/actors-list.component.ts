import { Component, OnInit } from '@angular/core';
import { ActorsService } from 'src/app/shared/services/actors.service';
import { ActorsPayload } from 'src/app/shared/interfaces/actors-payload';
import { Subscription } from 'rxjs';
import { LoginService } from 'src/app/shared/services/login.service';
import { faEye, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { UserPayload } from 'src/app/shared/interfaces/user-payload';

@Component({
  selector: 'app-actors-list',
  templateUrl: './actors-list.component.html',
  styleUrls: ['./actors-list.component.scss']
})
export class ActorsListComponent implements OnInit {

  actors?: ActorsPayload[];
  filteredActor: string = '';
  sub?: Subscription;
  userName?: string;
  showLoading: boolean = false;
  errorMsg?: string;
  userData: UserPayload;
 
  constructor(private actorsService: ActorsService, private loginService: LoginService) {
    this.userData = this.loginService.getUserObj();
  }

  ngOnInit(): void {
    this.showLoading = true;
    this.sub = this.actorsService.getActors().subscribe(
      (data) => { 
        this.showLoading = false;
        this.actors = data;
      },
      (error) => { 
        this.showLoading = false;
        this.errorMsg = error 
      }
      );
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  faEye = faEye;
  faSpinner= faSpinner;
  faSearch = faMagnifyingGlass;
}
