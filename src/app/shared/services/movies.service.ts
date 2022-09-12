import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MoviesPayload } from '../interfaces/movies-payload';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class MoviesService {

  moviesList = new BehaviorSubject<MoviesPayload[]>([])
  baseUrl?: string;

  constructor(private httpClient: HttpClient) { }

  getMovies(): Observable<MoviesPayload[]> {
    return this.httpClient.get<MoviesPayload[]>(this.baseUrl + "movies")
    .pipe(tap((res: MoviesPayload[]) => {
      this.moviesList.next(res)
    }));
  }

  ngOnInit(): void {}

  getMovie( ) {
   return this.moviesList.asObservable()
  }

}
  // movies = [
  //   { id: "1", name: 'Expendables 3', director: 'whatever1', time: '2h 6m', year: '2022', category: ['Action', 'Drama', 'Action'], img: 'https://m.media-amazon.com/images/M/MV5BODU5ODMyMzg2MV5BMl5BanBnXkFtZTgwMTA2MTcxMjE@._V1_.jpg', rating: '9.7', video: 'https://www.youtube.com/embed/4xD0junWlFc', description: 'dummytext'},
  //   { id: "2", name: 'The Batman', director: 'whatever2', time: '2h 30m', year: '2021',category: ['Comedy', 'Drama'], img: 'https://m.media-amazon.com/images/I/71kUTilIdiL._AC_SL1500_.jpg', rating: '10', video: 'https://www.youtube.com/embed/mqqft2x_Aa4', description: 'dummytext'},
  //   { id: "3", name: 'Spider-Man 3', director: 'whatever1', time: '1h 40m', year: '2032', category: ['Thriller', 'Drama'], img: 'https://m.media-amazon.com/images/M/MV5BYTk3MDljOWQtNGI2My00OTEzLTlhYjQtOTQ4ODM2MzUwY2IwXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_.jpg', rating: '7', video: 'https://www.youtube.com/embed/e5wUilOeOmg', description: 'dummytext'},
  //   { id: "4", name: 'Joker', director: 'whatever5', time: '2h', year: '2015', category: ['Horror', 'Comedy'], img: 'https://www.dc.com/sites/default/files/imce/2019/04-APR/JokerPoster1200_5ca3c435318d42.29270548.jpg', rating: '8', video: 'https://www.youtube.com/embed/t433PEQGErc', description: 'dummytext'},
  //   { id: "5", name: 'Inception', director: 'whatever12', time: '3h 10m', year: '2013', category: ['Action', 'Comedy'], img: 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg', rating: '9', video: 'https://www.youtube.com/embed/YoHD9XEInc0', description: 'dummytext'},
  // ]
 
  // getMovie( id: string ) {
  //   return this.movies.find(obj => obj.id === id);
  // }
