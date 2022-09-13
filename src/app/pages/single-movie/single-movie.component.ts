import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { of, Subscription, switchMap } from 'rxjs';
import { MoviesService } from 'src/app/shared/services/movies.service';

import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faStar , faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-single-movie',
  templateUrl: './single-movie.component.html',
  styleUrls: ['../../styles/pages/single-movie.scss']
})

export class SingleMovieComponent implements OnInit, OnDestroy {

  movie: any;
  sub?: Subscription;

  constructor( private service: MoviesService, private route: ActivatedRoute ) {}

  ngOnInit(): void {
    this.sub = this.route.paramMap.subscribe( (params) => {

      let id = params.get("id");

      if (id) {
        let movId = parseInt(id);
        this.service.getMovie()
        .pipe( 
          switchMap( (item) => {
            if (item.length) { return of(item) }
            return this.service.getMovies()
          })
        ) 
        .subscribe( (res) => {
          this.movie = res.find( (obj) => {
            return obj.movieId  === movId
          })
        })
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