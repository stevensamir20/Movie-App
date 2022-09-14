import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FavoritesService } from 'src/app/shared/services/favorites.service';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faEye, faStar, faSpinner, faRemove, faClose } from '@fortawesome/free-solid-svg-icons';
import { LoginService } from 'src/app/shared/services/login.service';
import { MoviesPayload } from 'src/app/shared/interfaces/movies-payload';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['../movies-list/movies-list.component.scss']
})

export class FavoritesComponent implements OnInit, OnDestroy {

  showLoading: boolean = false;
  favorites: MoviesPayload[] = [];
  sub?: Subscription;
  errorMsg?: string;
  userData: any;
  favMsg?: string;

  constructor(
    private favoriteService: FavoritesService, 
    private loginService: LoginService) 
  { this.userData = this.loginService.getUserObj(); }

  ngOnInit(): void {
    this.showLoading = true;
    this.sub = this.favoriteService.getFavorites(this.userData.id).subscribe(
      (res) => {
        this.favorites = res;
        this.showLoading = false;
      },
      (error) => { 
        this.showLoading = false;
        this.errorMsg = "Couldn't get favorites, try again later!";
      }
    );
  }

  deleteMovie(movieId: number){
    this.favMsg = "Deleting from favorites.."
    
    this.favoriteService.deleteFromFavorites(this.userData.id, movieId).subscribe(
      (res) => {
        let movieDeleted: number = this.favorites?.findIndex(object => { return object.movieId === movieId; });
        if (movieDeleted != -1){  
          this.favorites?.splice(movieDeleted, 1); 
        }
        this.favMsg = "Deleted from favorites!"
      },
      (error) => {
        this.favMsg = "Couldn't delete from favorites, try again later!"
      }
    )
  }
  
  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  faEye = faEye;
  faClock = faClock;
  faSpinner = faSpinner;
  faStar = faStar;
  faDelete = faRemove;
  faClose = faClose;
}