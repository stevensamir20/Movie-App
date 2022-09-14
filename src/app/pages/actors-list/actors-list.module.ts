import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ActorsListRoutingModule } from './actors-list-routing.module';
import { ActorsListComponent } from './actors-list.component';
import { ActorFilterPipe } from 'src/app/shared/pipes/actor-filter.pipe';

@NgModule({
  declarations: [
    ActorsListComponent,
    ActorFilterPipe
  ],
  imports: [
    CommonModule,
    ActorsListRoutingModule,
    FormsModule,
    FontAwesomeModule
  ]
})

export class ActorsListModule { }