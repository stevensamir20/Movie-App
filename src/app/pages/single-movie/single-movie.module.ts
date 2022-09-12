import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SingleMovieRoutingModule } from './single-movie-routing.module';
import { SingleMovieComponent } from './single-movie.component';
import { YoutubePipe } from 'src/app/shared/pipes/youtube.pipe';

@NgModule({
  declarations: [
    SingleMovieComponent,
    YoutubePipe
  ],
  imports: [
    CommonModule,
    SingleMovieRoutingModule
  ]
})

export class SingleMovieModule { }