import { Component, OnDestroy, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/shared/services/movies.service';
import { MoviesPayload } from 'src/app/shared/interfaces/movies-payload';
import { Subscription } from 'rxjs';

import { faHeart, faClock } from '@fortawesome/free-regular-svg-icons';
import { faStar , faEye, faVideo, faMagnifyingGlass, faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';
import { LoginService } from 'src/app/shared/services/login.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})

export class MoviesListComponent implements OnInit, OnDestroy {

  movies?: MoviesPayload[];
  filteredMovie: string = '';
  sub?: Subscription;
  userName: any;

  constructor(private moviesService: MoviesService, private loginService: LoginService) {
    this.userName = this.loginService.getToken();
  }

  ngOnInit(): void {
    this.sub = this.moviesService.getMovies().subscribe((data) => {
    this.movies = data;
    });
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }


  // Fontawesome variables
  faEye = faEye;
  faStar = faStar;
  faClock = faClock;
  faVideo = faVideo;
  faHeart = faHeart;
  faHeartSolid = faHeartSolid;
  faSearch = faMagnifyingGlass;
}