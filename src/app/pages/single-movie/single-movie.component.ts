import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { of, Subscription, switchMap } from 'rxjs';
import { MoviesService } from 'src/app/shared/services/movies.service';

import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faStar , faHeart as faHeartSolid, faSpinner } from '@fortawesome/free-solid-svg-icons';

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

  constructor( private service: MoviesService, private route: ActivatedRoute ) {}

  ngOnInit(): void {
    this.showLoading = true;
    this.sub = this.route.paramMap.subscribe( (params) => {
      
      let id = params.get("id");

      if (id) {
        let movId = parseInt(id);
        this.service.getMovie()
        .pipe( 
          switchMap( (item) => {
            if (item.length) { 
              return of(item) 
            }
            return this.service.getMovies()
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

  // Fontawesome variables
  faStar = faStar;
  faHeart = faHeart;
  faHeartSolid = faHeartSolid;
}