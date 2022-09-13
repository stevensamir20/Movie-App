import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseURL } from './baseUrl';

@Injectable({
  providedIn: 'root'
})

export class FavoritesService {

  constructor( private httpClient : HttpClient ) { }

  public setFavorite(userId: number, movieId: number) {
    return this.httpClient.post<any>(BaseURL + "/Users/favorites", { userId, movieId });
  }

  getFavorites() {
    return this.httpClient.get<any>(BaseURL + "/Users/favorites");
  }

}
