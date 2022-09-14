import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { of, Subscription, switchMap } from 'rxjs';
import { MoviesService } from 'src/app/shared/services/movies.service';

import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faStar , faHeart as faHeartSolid, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FavoritesService } from 'src/app/shared/services/favorites.service';
import { MoviesPayload } from 'src/app/shared/interfaces/movies-payload';
import { LoginService } from 'src/app/shared/services/login.service';

@Component({
  selector: 'app-single-movie',
  templateUrl: './single-movie.component.html',
  styleUrls: ['../../styles/pages/single-movie.scss']
})

export class SingleMovieComponent implements OnInit, OnDestroy {

  movie: any;
  sub?: Subscription;
  showLoading: boolean = false;
  errorMsg?: string;
  faSpinner = faSpinner;

  constructor( 
    private moviesService: MoviesService, 
    private route: ActivatedRoute, 
    private favService: FavoritesService, 
    private loginService: LoginService 
    ) {}

  ngOnInit(): void {
    this.showLoading = true;
    this.sub = this.route.paramMap.subscribe( (params) => { 
      let id = params.get("id");

      if (id) {
        let movId = parseInt(id);
        this.moviesService.getMovie()
        .pipe( 
          switchMap( (item) => {
            if (item.length) { 
              return of(item) 
            }
            return this.moviesService.getMovies()
          })
        ) 
        .subscribe( 
          (res) => {
            this.movie = res.find( (obj) => {
              this.showLoading = false;
              return obj.movieId  === movId
            })
          },
          (error) => {
            this.showLoading = false;
            this.errorMsg = error 
          }
        )
      }
    })
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  // Adding to local favorites
  addToFav(movId: number){
    console.log(movId);
    
    // this.favService.addToFavorites(movie);
    let usrId = this.loginService.getUserObj().id;
    console.log(usrId);
    
    this.favService.addToFavorite(usrId, movId).subscribe(
      (res) =>  {
        console.log("data sent");
      },
      (error) => {
        console.log(error);
      }
      );
  }
  
  // Fontawesome variables
  faStar = faStar;
  faHeart = faHeart;
  faHeartSolid = faHeartSolid;
}