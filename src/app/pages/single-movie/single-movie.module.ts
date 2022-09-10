import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SingleMovieRoutingModule } from './single-movie-routing.module';
import { SingleMovieComponent } from './single-movie.component';


@NgModule({
  declarations: [
    SingleMovieComponent
  ],
  imports: [
    CommonModule,
    SingleMovieRoutingModule
  ]
})
export class SingleMovieModule { }
