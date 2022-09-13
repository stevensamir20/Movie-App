import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FavoritesService } from 'src/app/shared/services/favorites.service';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faEye, faStar, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { LoginService } from 'src/app/shared/services/login.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html'
})

export class FavoritesComponent implements OnInit, OnDestroy {

  showLoading: boolean = false;
  favorites?: any;
  sub?: Subscription;
  errorMsg?: string;
  userData: any;

  constructor(private favoriteService: FavoritesService, private loginService: LoginService) {
    this.userData = this.loginService.getUserObj();
   }

  ngOnInit(): void {
    this.showLoading = true;
    this.sub = this.favoriteService.getFavorites().subscribe(
      (res) => {
        this.showLoading = false;
        this.favorites = res;
      },
      (error) => { 
        this.showLoading = true;
        this.errorMsg = "Couldn't get favorites, try again later!";
       }
      );
  }
  
  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  faEye = faEye;
  faClock = faClock;
  faSpinner = faSpinner;
  faStar = faStar;
}