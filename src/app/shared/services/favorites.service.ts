import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseURL } from './baseUrl';

@Injectable({
  providedIn: 'root'
})

export class FavoritesService {

  constructor( private httpClient : HttpClient ) {}
  
  public addToFavorite(userId: number, movieId: number) {
    return this.httpClient.post<any>(BaseURL + `/Users/addtofavourites/${userId}/${movieId}`, null);
  }
    
  public getFavorites(userId: number) {
    return this.httpClient.get<any>(BaseURL + `/Users/getfavourites/${userId}`);
  }

  public deleteFromFavorites(userId: number, movieId: number){
    return this.httpClient.delete<any>(BaseURL + `/Users/removefavourite/${userId}/${movieId}`);
  }
  
}