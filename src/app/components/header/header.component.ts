import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/shared/services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})

export class HeaderComponent implements OnInit {

  loginbtn:boolean;
  logoutbtn:boolean;

  constructor(private dataService: LoginService) {
    dataService.getLoggedInName.subscribe(name => this.changeName(name));
    if(this.dataService.isLoggedIn()){
        console.log("loggedin");
        this.loginbtn=false;
        this.logoutbtn=true
    }
    else{
        this.loginbtn=true;
        this.logoutbtn=false
    }
  }  

  ngOnInit() {}

  private changeName(name: boolean): void {
    this.logoutbtn = name;
    this.loginbtn = !name;
  }

  logOut() {
    this.dataService.deleteToken();
    window.location.href = window.location.href;
  }
  
}