import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleMovieRoutingModule } from './single-movie-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { YoutubePipe } from 'src/app/shared/pipes/youtube.pipe';

import { SingleMovieComponent } from './single-movie.component';

@NgModule({
  declarations: [
    SingleMovieComponent,
    YoutubePipe
  ],
  imports: [
    CommonModule,
    SingleMovieRoutingModule,
    FontAwesomeModule
  ]
})

export class SingleMovieModule { }