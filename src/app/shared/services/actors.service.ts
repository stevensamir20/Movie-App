import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { ActorsPayload } from '../interfaces/actors-payload';
import { BaseURL } from './baseUrl';

@Injectable({
  providedIn: 'root'
})

export class ActorsService {

  actorsList = new BehaviorSubject<ActorsPayload[]>([])

  constructor(private httpClient: HttpClient) { }

  getActors(): Observable<ActorsPayload[]> {
    return this.httpClient.get<ActorsPayload[]>("http://localhost:3000/actors")
    .pipe(tap((res: ActorsPayload[]) => {
      this.actorsList.next(res)
    }));
  }

  ngOnInit(): void {}

  getActor( ) {
   return this.actorsList.asObservable()
  }
  
}