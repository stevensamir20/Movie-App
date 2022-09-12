import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SingleActorRoutingModule } from './single-actor-routing.module';
import { SingleActorComponent } from './single-actor.component';


@NgModule({
  declarations: [
    SingleActorComponent
  ],
  imports: [
    CommonModule,
    SingleActorRoutingModule
  ]
})
export class SingleActorModule { }
