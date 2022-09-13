import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActorsListComponent } from './actors-list.component';

const routes: Routes = [{ path: '', component: ActorsListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ActorsListRoutingModule { }