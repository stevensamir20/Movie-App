import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/shared/services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})

export class HeaderComponent implements OnInit {

  loggedIn:boolean;

  constructor(private dataService: LoginService) {
    dataService.getLoggedInState.subscribe(state => this.changeLoggedState(state));
    if(this.dataService.isLoggedIn()){
      this.loggedIn=true
    }
    else{
      this.loggedIn=false
    }
  }  

  ngOnInit() {}

  changeLoggedState(state: boolean): void {
    this.loggedIn = state;
  }

  logOut() {
    this.dataService.deleteToken();
    window.location.href = window.location.href;
  }
  
}