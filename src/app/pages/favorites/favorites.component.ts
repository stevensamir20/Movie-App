import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FavoritesService } from 'src/app/shared/services/favorites.service';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faEye, faStar, faSpinner, faRemove } from '@fortawesome/free-solid-svg-icons';
import { LoginService } from 'src/app/shared/services/login.service';
import { MoviesPayload } from 'src/app/shared/interfaces/movies-payload';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['../movies-list/movies-list.component.scss']
})

export class FavoritesComponent implements OnInit, OnDestroy {

  showLoading: boolean = false;
  favorites?: any[];
  sub?: Subscription;
  errorMsg?: string;
  userData: any;

  constructor(
    private favoriteService: FavoritesService, 
    private loginService: LoginService) 
  {
    this.userData = this.loginService.getUserObj();
    // this.favorites = this.favoriteService.getFavorites()
  }

  ngOnInit(): void {
    this.sub = this.favoriteService.getFavorites(this.userData.id).subscribe(
      (res) => {
        this.favorites = res;
        this.showLoading = false;
      },
      (error) => { 
        this.showLoading = false;
        console.log(error);
        this.errorMsg = "Couldn't get favorites, try again later!";
      }
    );
  }

  deleteMovie(movieId: number){
    this.favoriteService.deleteFromFavorites(this.userData.id, movieId).subscribe(
      (res) => {
       console.log(res);
      },
      (error) => { 
        console.log(error);
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
  faDelete = faRemove;
}