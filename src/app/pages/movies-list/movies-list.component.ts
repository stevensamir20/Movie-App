import { Component, OnDestroy, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/shared/services/movies.service';
import { MoviesPayload } from 'src/app/shared/interfaces/movies-payload';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html'
})

export class MoviesListComponent implements OnInit, OnDestroy {

  movies?: MoviesPayload[];
  filteredMovie: string = '';
  sub?: Subscription;

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.sub = this.moviesService.getMovies().subscribe((data) => {
    this.movies = data;
    });
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

}