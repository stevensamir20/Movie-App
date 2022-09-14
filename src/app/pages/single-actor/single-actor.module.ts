import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SingleActorRoutingModule } from './single-actor-routing.module';
import { SingleActorComponent } from './single-actor.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    SingleActorComponent
  ],
  imports: [
    CommonModule,
    SingleActorRoutingModule,
    FontAwesomeModule
  ]
})
export class SingleActorModule { }
