import { Component, OnDestroy, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/shared/services/movies.service';
import { MoviesPayload } from 'src/app/shared/interfaces/movies-payload';
import { Subscription } from 'rxjs';
import { faHeart, faClock } from '@fortawesome/free-regular-svg-icons';
import { faStar , faEye, faMagnifyingGlass, faHeart as faHeartSolid, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { LoginService } from 'src/app/shared/services/login.service';
import { UserPayload } from 'src/app/shared/interfaces/user-payload';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})

export class MoviesListComponent implements OnInit, OnDestroy {

  movies?: MoviesPayload[];
  filteredMovie: string = '';
  sub?: Subscription;
  userData: UserPayload;
  showLoading: boolean = false;
  errorMsg?: string;
  favMsg?: string;

  constructor(private moviesService: MoviesService, private loginService: LoginService ) {
    this.userData = this.loginService.getUserObj();
  }

  ngOnInit(): void {
    this.showLoading = true;
    this.sub = this.moviesService.getMovies().subscribe(
      (data) => {
        this.showLoading = false;
        this.movies = data;
      },
      (error) => { 
        this.showLoading = true;
        this.errorMsg = error;
       }
      );
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  // Fontawesome variables
  faEye = faEye;
  faStar = faStar;
  faClock = faClock;
  faHeart = faHeart;
  faSpinner = faSpinner;
  faHeartSolid = faHeartSolid;
  faSearch = faMagnifyingGlass;
}