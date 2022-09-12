import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActorsListRoutingModule } from './actors-list-routing.module';
import { ActorsListComponent } from './actors-list.component';
import { FormsModule } from '@angular/forms';
import { SharedLibModule } from 'src/app/shared/libraries/shared-lib/shared-lib.module';

@NgModule({
  declarations: [
    ActorsListComponent
  ],
  imports: [
    CommonModule,
    ActorsListRoutingModule,
    FormsModule,
    SharedLibModule
  ]
})
export class ActorsListModule { }
