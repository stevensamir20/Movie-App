import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { MoviesService } from 'src/app/shared/services/movies.service';

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
    this.sub = this.route.paramMap.subscribe(params => {
      let id = params.get("id");
       this.service.getMovie().subscribe( (res) => {
        this.movie = res.find(obj => obj.id == id)
       })
    })
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

}