import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingleMovieComponent } from './single-movie.component';

const routes: Routes = [{ path: '', component: SingleMovieComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class SingleMovieRoutingModule { }