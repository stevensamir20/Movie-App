import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MoviesPayload } from '../interfaces/movies-payload';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { BaseURL } from './baseUrl';

@Injectable({
  providedIn: 'root'
})

export class MoviesService {

  moviesList = new BehaviorSubject<MoviesPayload[]>([])

  constructor(private httpClient: HttpClient) { }

  getMovies(): Observable<MoviesPayload[]> {
    return this.httpClient.get<MoviesPayload[]>(BaseURL + "/Movies/getmovies")
    .pipe(tap((res: MoviesPayload[]) => {
      this.moviesList.next(res)
    }));
  }

  ngOnInit(): void {}

  getMovie( ) {
   return this.moviesList.asObservable()
  }

}